import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../class/ticket';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postTicket(ticket: any) {
        return this.http.post("http://localhost:3000/tickets", ticket)
  }

  getTicket(){
    return this.http.get<any>("http://localhost:3000/tickets/")
  }
  updateTicket(data:any, id : number){
    return this.http.put<any>("http://localhost:3000/tickets/"+id, data)
  }
  deleteTicket(id : number,data:any){
    return this.http.post(`http://localhost:3000/tickets/delete/${id}`,data)
  }

}
