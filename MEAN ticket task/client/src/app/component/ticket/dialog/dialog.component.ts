import { Component, OnInit,  Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { AuthService } from '../../header/_services/auth.service';
// import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  user;
  ticketForm !: FormGroup;
  actionBtn : string = "Save"
  constructor(private formBuilder: FormBuilder,
     private api: ApiService,
     @Inject(MAT_DIALOG_DATA) public editData : any,
     private dialog: MatDialogRef<DialogComponent>,private auth:AuthService) {
      this.user=this.auth.user.username;
      
      }


  ngOnInit(): void {
    console.log(this.user)
    this.ticketForm = this.formBuilder.group({
      user_id : ['', Validators.required],
      ticket_desc : ['', Validators.required],
      userName : [this.user, Validators.required],
      
    });
    if(this.editData){
      this.actionBtn = "Update";
      this.ticketForm.controls['user_id'].setValue(this.editData.user_id);
      this.ticketForm.controls['ticket_desc'].setValue(this.editData.ticket_desc);
      this.ticketForm.controls['userName'].setValue(this.editData.userName);
    }
  }
addTicket(){
  if(this.editData){
    this.editTicket()
  }
  else{

    if(this.ticketForm.valid){
      console.log(this.ticketForm.value);
      this.api.postTicket(this.ticketForm.value).subscribe({ 
        next:()=>{
          alert("ticket added successfully")
          this.ticketForm.reset();
          this.dialog.close('save');
  
        },
        error:()=>{
          alert("Error while adding ticket")
        }
      })
  
    }
  }
}

editTicket(){
  // alert(this.ticketForm.value)
  // alert(this.editData._id)
  this.api.updateTicket(this.ticketForm.value,this.editData._id)
  .subscribe({
    next:(res)=>{
      alert("Ticket updated Successfully");
      this.ticketForm.reset();
      this.dialog.close('update')
    },
    error:(error)=>{
      alert(error.messages)
    }
  })
}

}
