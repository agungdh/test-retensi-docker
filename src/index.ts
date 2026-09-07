import { createApp } from "./app";
import { HOST, PORT } from "./config";

const app = createApp();

app.listen({ hostname: HOST, port: PORT }, ({ hostname, port }) => {
  console.log(`🦊 Elysia is running at http://${hostname}:${port}`);
});
