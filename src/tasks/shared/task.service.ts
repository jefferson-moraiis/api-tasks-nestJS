import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Tasks>) {}

  async getAllTasks() {
    return await this.taskModel.find().exec();
  }
  async getByIdTask(id: string) {
    return await this.taskModel.findById(id).exec();
  }

  async createTask(task: Tasks) {
    const createdTask = new this.taskModel(task);
    return await createdTask.save();
  }

  async updateTask(id: string, task: Tasks) {
    await this.taskModel.updateOne({ _id: id }, task).exec();

    return this.getByIdTask(id);
  }

  async deleteTask(id: string) {
    return await this.taskModel.deleteOne({ _id: id }).exec();
  }
}
