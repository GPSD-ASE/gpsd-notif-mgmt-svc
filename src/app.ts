import express from "express";
import bodyParser from "body-parser";
import messageRoutes from "./routes/message";

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/messages", messageRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("FCM Messaging Server is running!");
});

export default app;
