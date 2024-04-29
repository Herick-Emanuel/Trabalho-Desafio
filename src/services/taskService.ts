import { Task } from "../models/taskModel";

const tasks: Task[] = [];

export function createTask(taskData: Task): Task {
  const id = generateId();
  const newTask: Task = { ...taskData, id };
  tasks.push(newTask);
  return newTask;
}

export function getAllTasks(): Task[] {
  return tasks;
}

export function getTaskById(taskId: string): Task | undefined {
  return tasks.find((task) => task.id === taskId);
}

export function updateTask(taskId: string, taskData: Task): Task | undefined {
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    tasks[index] = { ...taskData, id: taskId };
    return tasks[index];
  }
  return undefined;
}

export function deleteTask(taskId: string): void {
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
