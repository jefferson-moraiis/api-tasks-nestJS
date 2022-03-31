import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks';

@Injectable()
export class TaskService {
  tasks: Tasks[] = [
    { id: 1, description: 'Tarefa 1', completed: false },
    { id: 2, description: 'Tarefa 2', completed: true },
  ];

  getAllTasks() {
    return this.tasks;
  }
  getByIdTask(id: number) {
    const taskFind = this.tasks.find((value) => value.id == id);
    return taskFind;
  }

  createTask(task: Tasks) {
    let lastId = 0;
    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }

    task.id = lastId + 1;
    this.tasks.push(task);

    return task;
  }

  updateTask(task: Tasks) {
    const taskArray = this.getByIdTask(task.id);
    if (taskArray) {
      taskArray.description = task.description;
      taskArray.completed = task.completed;
    }

    return taskArray;
  }

  deleteTask(id: number) {
    const index = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(index, 1);
  }
}
