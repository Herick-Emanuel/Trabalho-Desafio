import { Category } from "../models/categoryModel";

const categories: Category[] = [];

export function createCategory(categoryData: Category): Category {
  const { nome, cor } = categoryData;

  if (categories.some((category) => category.nome === nome)) {
    throw new Error("Categoria já existe");
  }

  const id = generateId();
  const newCategory: Category = { ...categoryData, id };
  categories.push(newCategory);
  return newCategory;
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((category) => category.id === categoryId);
}

export function updateCategory(
  categoryId: string,
  categoryData: Category
): Category | undefined {
  const index = categories.findIndex((category) => category.id === categoryId);
  if (index !== -1) {
    categories[index] = { ...categoryData, id: categoryId };
    return categories[index];
  }
  return undefined;
}

export function deleteCategory(categoryId: string): void {
  const index = categories.findIndex((category) => category.id === categoryId);
  if (index !== -1) {
    categories.splice(index, 1);
  }
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
