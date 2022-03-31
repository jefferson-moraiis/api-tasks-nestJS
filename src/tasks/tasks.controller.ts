import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { Tasks } from './shared/tasks';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAll(): Promise<Tasks[]> {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Tasks> {
    return this.taskService.getByIdTask(id);
  }

  @Post()
  async create(@Body() task: Tasks): Promise<Tasks> {
    return this.taskService.createTask(task);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() task: Tasks): Promise<Tasks> {
    task.id = id;
    return this.taskService.updateTask(task);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.taskService.deleteTask(id);
  }
}
