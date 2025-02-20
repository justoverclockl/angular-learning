import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './dummy-users';
import {UserTasksComponent} from './user-tasks/user-tasks.component';
import {User, Users} from './user/types';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    UserTasksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users: Users = DUMMY_USERS
  selectedUserId = signal<string>('')

  get selectedUser(): User | undefined {
    return this.users.find(user => user.id === this.selectedUserId())
  }

  onSelectUser(id: string) {
    this.selectedUserId.set(id)
  }
}
