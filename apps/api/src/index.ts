import { createApp } from "./app";

const app = createApp();
const port = process.env.PORT || 3001;

console.log(`🚀 RIP Social API running on http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
