import { Request, Response } from "express";
import * as categoryService from "../services/categoryService";
import { Category } from "../models/categoryModel";

export function createCategory(req: Request, res: Response): void {
  try {
    const { nome, cor } = req.body;

    const newCategory: Category = categoryService.createCategory({
      nome,
      cor,
      id: "",
    });

    res.status(201).json(newCategory);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export function getAllCategories(req: Request, res: Response): void {
  try {
    const categories: Category[] = categoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export function getCategory(req: Request, res: Response): void {
  try {
    const categoryId: string = req.params.id;
    const category: Category | undefined =
      categoryService.getCategoryById(categoryId);

    if (!category) {
      res.status(404).json({ message: "Categoria não encontrada" });
      return;
    }

    res.status(200).json(category);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export function updateCategory(req: Request, res: Response): void {
  try {
    const categoryId: string = req.params.id;
    const { nome, cor } = req.body;

    const updatedCategory: Category | undefined =
      categoryService.updateCategory(categoryId, {
        nome,
        cor,
        id: "",
      });

    if (!updatedCategory) {
      res.status(404).json({ message: "Categoria não encontrada" });
      return;
    }

    res.status(200).json(updatedCategory);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export function deleteCategory(req: Request, res: Response): void {
  try {
    const categoryId: string = req.params.id;
    categoryService.deleteCategory(categoryId);
    res.status(204).end();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
