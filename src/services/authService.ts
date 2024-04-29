import { User } from "../models/userModel";

const users: User[] = [];

export function registerUser(userData: User): User {
  const { username, email } = userData;

  if (
    users.some((user) => user.username === username || user.email === email)
  ) {
    throw new Error("User already exists");
  }

  const id = generateId();
  const newUser: User = { ...userData, id };
  users.push(newUser);
  return newUser;
}

export function loginUser(credentials: {
  username: string;
  password: string;
}): User | null {
  const { username, password } = credentials;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  return user || null;
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
