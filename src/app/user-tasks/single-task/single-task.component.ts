import {Component, input, output} from '@angular/core';
import { type SingleTaskType} from './types';

@Component({
  selector: 'app-single-task',
  imports: [],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.css'
})
export class SingleTaskComponent {
  task = input.required<SingleTaskType>()
  complete = output<string>()

  onCompleteTask() {
    this.complete.emit(this.task().id)
  }
}
