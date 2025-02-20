import {Component, input} from '@angular/core';
import {SingleTaskType} from './types';

@Component({
  selector: 'app-single-task',
  imports: [],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.css'
})
export class SingleTaskComponent {
  task = input.required<SingleTaskType>()
}
