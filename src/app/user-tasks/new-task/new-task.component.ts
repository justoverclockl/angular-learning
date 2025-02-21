import {Component, inject, input, output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTaskType} from '../single-task/types';
import {UserTasksService} from '../user-tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  private tasksService: UserTasksService = inject(UserTasksService)

  closeModal = output<void>()

  userId = input.required<string>()
  enteredTitle = signal<string>('')
  enteredSummary = signal<string>('')
  enteredDate = signal<string>('')

  onCancel() {
    this.closeModal.emit()
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate()
    }, this.userId())
    this.closeModal.emit()
  }
}
