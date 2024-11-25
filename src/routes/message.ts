import { Router, Request, Response } from "express";
import messaging from "../config/firebase";

const router = Router();

router.post("/send", async (req: Request, res: Response): Promise<void> => {
  const { token, notification, data } = req.body;

  if (!token || !notification) {
    res.status(400).json({ error: "Token and notification are required" });
    return;
  }

  const message = {
    token,
    notification,
    data: data || {},
  };

  try {
    const response = await messaging.send(message);
    res.status(200).json({ message: "Message sent successfully", response });
  } catch (error: any) {
    res.status(500).json({
      error: "Failed to send message",
      details: error.message || "Unknown error",
    });
  }
});

export default router;
