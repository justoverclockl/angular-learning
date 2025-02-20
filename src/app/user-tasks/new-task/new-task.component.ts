import {Component, output} from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  closeModal = output<void>()

  onCancel() {
    this.closeModal.emit()
  }
}
