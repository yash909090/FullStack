import { Component, OnInit } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Ticket } from './class/ticket';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AuthService } from '../header/_services/auth.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  displayedColumns: string[] = ['user_id', 'userName', 'ticket_desc', 'created_At', 'updated_At', 'deleted_At', 'edit','delete'];
  // displayedColumns: string[] = [ 'user_id','userName', 'ticket_desc'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  user;


  constructor(private dialog : MatDialog, private api : ApiService,private auth:AuthService) {
    this.auth.isloggedin=true
    this.user=this.auth.user.username;
   }

  ngOnInit(): void {
    this.getAlltickets();
  }
  openDialog() {
  
    this.dialog.open(DialogComponent   , {
      width:'30%',
      
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAlltickets();
      }
    })
  }
  getAlltickets(){
    this.api.getTicket()
    .subscribe({
      next:(res)=>{
        // console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while fetching the records")
      }
    })
  }

  editTicket( row: any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data: row
    }
    ).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAlltickets();
      }
    })
  }
  deleteTicket(id:number,data:any){
    console.log(id)
    this.api.deleteTicket(id,data)
    .subscribe({
      next:(res)=>{
        alert("Ticket deleted successfully");
        this.getAlltickets();
      },
      error:()=>{
        alert("Error while deleting Ticket");
      }
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


