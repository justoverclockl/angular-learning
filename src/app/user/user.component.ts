import {Component, computed, input, output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  id = input.required<string>()
  avatar = input.required<string>()
  name = input.required<string>()
  imagePath = computed((): string => `assets/users/${this.avatar()}`)

  select = output<string>()

  onSelectUser() {
    this.select.emit(this.id())
  }
}
