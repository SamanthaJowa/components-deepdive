import { AfterViewInit, Component, ElementRef, EventEmitter, output, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [ControlComponent, ButtonComponent, FormsModule]
})
export class NewTicketComponent implements AfterViewInit {
    // @ViewChild('form') form?: ElementRef<HTMLFormElement>;

    add = output<{title: string;text:string}>()

    private form = viewChild<ElementRef<HTMLFormElement>>('form')

    onSubmit(title: string, ticketText: string,){
        this.add.emit({title: title, text: ticketText})
        this.form()?.nativeElement.reset()   
    }

    ngAfterViewInit() {
        console.log('After view init')
        console.log(this.form()?.nativeElement)
    }
}
