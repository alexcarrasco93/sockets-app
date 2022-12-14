import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { ChatComponent } from '../../components/chat/chat.component';
import { WebsocketService } from '../../services/websocket.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, NavbarComponent, UsersListComponent, ChatComponent],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  name = this.wsService.getUser()?.name;

  constructor(private wsService: WebsocketService) {}

  logout() {
    this.wsService.logout();
  }
}
