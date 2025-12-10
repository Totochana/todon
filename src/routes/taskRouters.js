import express from "express";
import {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask,
} from "../controllers/taskControllers.js";

const router = express.Router();

router.get("/tasks", getAllTasks);

router.post("/post/id", createTask);

router.delete("/delete/id", deleteTask);

router.put("/update/id", updateTask);

export default router;
