import express from "express";
import dotenv from "dotenv";

dotenv.config();

import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/auth",authRoutes)

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectDB();
});
