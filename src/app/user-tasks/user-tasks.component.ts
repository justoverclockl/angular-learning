import {Component, input, output} from '@angular/core';
import {SingleTaskComponent} from './single-task/single-task.component';
import {SingleTaskType} from './single-task/types';

@Component({
  selector: 'app-user-tasks',
  imports: [
    SingleTaskComponent
  ],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent {
  name = input.required<string>()
  userId = input.required<string>()

  tasks: Array<SingleTaskType> = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId())
  }
}
