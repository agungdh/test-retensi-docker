import type { Elysia } from "elysia";
import { rootRoutes } from "./root";

export function registerRoutes(app: Elysia) {
  return app.use(rootRoutes);
}
