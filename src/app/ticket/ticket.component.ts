import { Component } from '@angular/core';
import { Ticket } from './ticket';
import { TicketService } from './ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  constructor(private ts: TicketService, private router: Router){};

  data:{}|any;
  ticketObj:Ticket= new Ticket();
  ticketList:Array<Ticket>=[];

  addTicket(mid:number)
  {
    this.ts.addTicket(mid, this.ticketObj).subscribe(data=>
      {
        this.data= JSON.stringify(data);
        this.ticketList.push(this.data);
        alert("Ticket added and updated");
        this.router.navigate(['movie']);
        //window.location.reload();
      },
      error=>
      {
        console.log(error);
      })
  }
  
}
