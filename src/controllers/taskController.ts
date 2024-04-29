import { Request, Response } from "express";
import * as taskService from "../services/taskService";
import { Task } from "../models/taskModel";

export function createTask(req: Request, res: Response): void {
  try {
    const taskData: Task = req.body;
    const newTask = taskService.createTask(taskData);
    res.status(201).json(newTask);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export function getAllTasks(req: Request, res: Response): void {
  try {
    const tasks = taskService.getAllTasks();
    res.json(tasks);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export function getTask(req: Request, res: Response): void {
  try {
    const taskId = req.params.id;
    const task = taskService.getTaskById(taskId);
    if (!task) {
      res.status(404).json({ message: "Tarefa não encontrada" });
      return;
    }
    res.json(task);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export function updateTask(req: Request, res: Response): void {
  try {
    const taskId = req.params.id;
    const taskData: Task = req.body;
    const updatedTask = taskService.updateTask(taskId, taskData);
    if (!updatedTask) {
      res.status(404).json({ message: "Tarefa não encontrada" });
      return;
    }
    res.json(updatedTask);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export function deleteTask(req: Request, res: Response): void {
  try {
    const taskId = req.params.id;
    taskService.deleteTask(taskId);
    res.sendStatus(204);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
