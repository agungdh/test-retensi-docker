import { Elysia } from "elysia";

export const rootRoutes = new Elysia().get("/", () => "Hello Elysia");
