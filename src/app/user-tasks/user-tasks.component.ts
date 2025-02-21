import {Component, input, output} from '@angular/core';
import {SingleTaskComponent} from './single-task/single-task.component';
import {NewTaskType, SingleTaskType} from './single-task/types';
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
  constructor(
    private tasksService: UserTasksService
  ) {

  }

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

  onNewTask(taskData: NewTaskType) {
    this.tasksService.addTask(taskData, this.userId())
    this.isAddingTask = false
  }
}
