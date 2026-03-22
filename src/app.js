import express from "express";
import authRoutes from "./routes/auth.route.js";
import requestLogger from "./middleware/requestLogger.js";
import errorLogger from "./middleware/errorLogger.js";
import errorHandle from "./middleware/errorHandle.js";

const app = express();

app.use(express.json());

app.use(requestLogger);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "HOME PAGE" });
});

app.get("/api/profile", (req, res) => {
  res.json({ message: "Profile" });
});

app.use(errorLogger);

app.use(errorHandle);

export default app;
