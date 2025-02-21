import {Component, computed, Input, input, output} from '@angular/core';
import {User} from './types';
import {CardComponent} from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User>()
  isSelected = input.required<boolean>()
  imagePath = computed((): string => `assets/users/${this.user().avatar}`)

  select = output<string>()

  onSelectUser() {
    this.select.emit(this.user().id)
  }
}
