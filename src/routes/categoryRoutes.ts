// src/routes/categoryRoutes.ts

import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController";

const router = express.Router();

// Rota para criação de uma nova categoria
router.post("/categories", createCategory);

// Rota para listar todas as categorias de um usuário
router.get("/categories", getAllCategories);

// Rota para obter detalhes de uma categoria específica
router.get("/categories/:id", getCategory);

// Rota para atualizar uma categoria existente
router.put("/categories/:id", updateCategory);

// Rota para excluir uma categoria
router.delete("/categories/:id", deleteCategory);

export default router;
