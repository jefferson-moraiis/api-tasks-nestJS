import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});
