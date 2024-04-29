// src/routes/taskRoutes.ts

import express from "express";
import {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController";

const router = express.Router();

// Rota para criação de uma nova tarefa
router.post("/tasks", createTask);

// Rota para listar todas as tarefas de um usuário
router.get("/tasks", getAllTasks);

// Rota para obter detalhes de uma tarefa específica
router.get("/tasks/:id", getTask);

// Rota para atualizar uma tarefa existente
router.put("/tasks/:id", updateTask);

// Rota para excluir uma tarefa
router.delete("/tasks/:id", deleteTask);

export default router;
