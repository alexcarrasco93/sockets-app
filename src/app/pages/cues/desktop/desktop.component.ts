import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ticket } from '../../../interfaces/ticket';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
})
export class DesktopComponent {
  @Input()
  tickets: Ticket[] = [];
  @Input()
  desktop!: string;

  @Output()
  attend = new EventEmitter<{ ticket: Ticket; attendedId?: number }>();

  currentTicket?: Ticket;

  attendToTicket() {
    const ticketToAttend = this.tickets[0];
    ticketToAttend.desktop = this.desktop;
    this.attend.emit({
      ticket: ticketToAttend,
      attendedId: this.currentTicket?.id,
    });
    this.currentTicket = ticketToAttend;
  }
}
