import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
    selector: 'app-support-ticket',
    standalone: true,
    templateUrl: './support-ticket.component.html',
    styleUrl: './support-ticket.component.css',
    imports: [NewTicketComponent, TicketComponent]
})
export class SupportTicketComponent {
    tickets: Ticket[] = []

    onAdd(ticketData: {title: string;text:string}){
        const ticket: Ticket = {
            title: ticketData.title,
            request: ticketData.text,
            id: Math.random().toString(),
            status: 'open'
        }
    }
}
