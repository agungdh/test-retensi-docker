import { Elysia } from "elysia";
import { registerRoutes } from "./routes";

export function createApp() {
  const app = new Elysia();
  return registerRoutes(app);
}

export type App = ReturnType<typeof createApp>;
