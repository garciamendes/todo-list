import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { bootstrapTrash } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

export interface ITask {
  id: number
  title: string
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  viewProviders: [provideIcons({ bootstrapTrash })]
})
export class TaskComponent {
  @Input() data!: ITask;
  @Input() deleteTask!: void
}
