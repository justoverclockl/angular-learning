import {Component, inject, input} from '@angular/core';
import { type SingleTaskType} from './types';
import {CardComponent} from '../../shared/card/card.component';
import {DatePipe} from '@angular/common';
import {UserTasksService} from '../user-tasks.service';

@Component({
  selector: 'app-single-task',
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.css'
})
export class SingleTaskComponent {
  private tasksService = inject(UserTasksService)

  task = input.required<SingleTaskType>()

  onCompleteTask() {
    this.tasksService.removeTask(this.task().id)
  }
}
