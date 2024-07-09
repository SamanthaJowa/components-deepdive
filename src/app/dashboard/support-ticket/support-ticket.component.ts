import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
    selector: 'app-support-ticket',
    standalone: true,
    templateUrl: './support-ticket.component.html',
    styleUrl: './support-ticket.component.css',
    imports: [NewTicketComponent]
})
export class SupportTicketComponent {

}
