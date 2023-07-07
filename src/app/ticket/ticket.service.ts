import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }
  ticketList:Ticket[] |any;

  private apiPostTicket: string =`http://localhost:8082/api/v1/ticket/add`;  
  // private apiPostTicket: string =`https://nqr1xhu362.execute-api.us-west-2.amazonaws.com/MovieAppDeployed/myticketresource`;

  addTicket(mid:number, ticket:Ticket):Observable<Ticket>
  {
    return this.http.post<Ticket>(`${this.apiPostTicket}/${mid}`, ticket);
  }

      
}
