import {Component, input, output} from '@angular/core';
import { type SingleTaskType} from './types';
import {CardComponent} from '../../shared/card/card.component';
import {DatePipe} from '@angular/common';

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
  task = input.required<SingleTaskType>()
  complete = output<string>()

  onCompleteTask() {
    this.complete.emit(this.task().id)
  }
}
