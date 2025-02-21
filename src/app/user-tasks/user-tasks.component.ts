import {Component, inject, input, output} from '@angular/core';
import {SingleTaskComponent} from './single-task/single-task.component';
import {NewTaskComponent} from './new-task/new-task.component';
import {UserTasksService} from './user-tasks.service';

@Component({
  selector: 'app-user-tasks',
  imports: [
    SingleTaskComponent,
    NewTaskComponent,
  ],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent {
  private tasksService = inject(UserTasksService)

  name = input.required<string>()
  userId = input.required<string>()
  isAddingTask = false

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId())
  }

  onClickCompleteTask(id: string) {
    return this.tasksService.removeTask(id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
