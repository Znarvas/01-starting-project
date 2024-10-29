import { Component, input, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!: string;
 @Input({required:true}) name!: string;
  tasks = [
    {
      id: 't1', 
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn madami and earn madami',
      dueDate: '2025-12-31'
    },
    {
      id: 't1',
      userId: 'u2',
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
  ];

  get selecetedUserTasks() {
    return this.tasks.filter((tasks)=> tasks.userId === this.userId); 
  }
}
