import { User } from "../models/userModel";

let users: User[] = [];

export function createUser(userData: User): User {
  const newUser: User = { ...userData, id: generateId() };
  users.push(newUser);
  return newUser;
}

export function getAllUsers(): User[] {
  return users;
}

export function getUserById(userId: string): User | undefined {
  return users.find((user) => user.id === userId);
}

export function updateUser(userId: string, userData: User): User | undefined {
  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    users[index] = { ...userData, id: userId };
    return users[index];
  }
  return undefined;
}

export function deleteUser(userId: string): void {
  users = users.filter((user) => user.id !== userId);
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
