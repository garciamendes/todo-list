import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskComponent } from '../components/task/task.component';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TaskComponent,
    NgIconComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items = [
    { id: 1, title: 'teste_1' },
    { id: 2, title: 'teste_2' },
    { id: 3, title: 'teste_3' },
    { id: 4, title: 'teste_4' },
    { id: 5, title: 'teste_5' },
  ]

  task = new FormControl('', Validators.required)


  addNewtask() {
    this.items.push({ id: this.items.length + 1, title: this.task.value as string })
    this.task.reset()
  }

  deleteTask(task_id: number) {
    const hasTask = this.items.find(row => row.id === task_id)

    if (!hasTask) return

    const newArray = this.items.filter(row => row.id !== task_id)
    this.items = newArray
  }
}
