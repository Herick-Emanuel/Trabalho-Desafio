import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from "../services/categoryService";
import { Category } from "../models/categoryModel";

describe("Category Service", () => {
  let categoryId: string;

  test("should create a new category", () => {
    const categoryData: Category = { id: "", nome: "Work", cor: "blue" };
    const newCategory = createCategory(categoryData);
    categoryId = newCategory.id;
    expect(newCategory.nome).toBe(categoryData.nome);
  });

  test("should get all categories", () => {
    const categories = getAllCategories();
    expect(categories.length).toBeGreaterThan(0);
  });

  test("should get a category by ID", () => {
    const category = getCategoryById(categoryId);
    expect(category).toBeTruthy();
  });

  test("should update a category", () => {
    const updatedCategoryData: Category = {
      id: categoryId,
      nome: "Work",
      cor: "red",
    };
    const updatedCategory = updateCategory(categoryId, updatedCategoryData);
    expect(updatedCategory?.cor).toBe(updatedCategoryData.cor);
  });

  test("should delete a category", () => {
    deleteCategory(categoryId);
    const deletedCategory = getCategoryById(categoryId);
    expect(deletedCategory).toBeUndefined();
  });
});
