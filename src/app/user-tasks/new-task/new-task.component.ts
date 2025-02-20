import {Component, output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTaskType} from '../single-task/types';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  closeModal = output<void>()
  addTask = output<NewTaskType>()

  enteredTitle = signal<string>('')
  enteredSummary = signal<string>('')
  enteredDate = signal<string>('')

  onCancel() {
    this.closeModal.emit()
  }

  onSubmit() {
    this.addTask.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate()
    })
  }
}
