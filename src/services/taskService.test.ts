import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "./taskService";
import { Task } from "../models/taskModel";

describe("Task Service", () => {
  let taskId: string;

  test("should create a new task", () => {
    const taskData: Task = {
      id: "",
      título: "Do something",
      descrição: "Do something important",
      data_criação: new Date(),
      tipo: "simples",
      status: "pendente",
      usuário_associado: "1",
    };

    const newTask = createTask(taskData);
    taskId = newTask.id;
    expect(newTask.título).toBe(taskData.título);
  });

  test("should get all tasks", () => {
    const tasks = getAllTasks();
    expect(tasks.length).toBeGreaterThan(0);
  });

  test("should get a task by ID", () => {
    const task = getTaskById(taskId);
    expect(task).toBeTruthy();
  });

  test("should update a task", () => {
    const updatedTaskData: Task = {
      id: taskId,
      título: "Do something else",
      descrição: "Do something else important",
      data_criação: new Date(),
      tipo: "simples",
      status: "em andamento",
      usuário_associado: "1",
    };

    const updatedTask = updateTask(taskId, updatedTaskData);
    expect(updatedTask?.título).toBe(updatedTaskData.título);
  });

  test("should delete a task", () => {
    deleteTask(taskId);
    const deletedTask = getTaskById(taskId);
    expect(deletedTask).toBeUndefined();
  });
});
