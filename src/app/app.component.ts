import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './dummy-users';
import {UserTasksComponent} from './user-tasks/user-tasks.component';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, UserTasksComponent, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS
  selectedUserId = signal<string>('')

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId())
  }

  onSelectUser(id: string) {
    this.selectedUserId.set(id)
  }
}
