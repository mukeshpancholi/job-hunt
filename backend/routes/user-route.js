import express, { Router } from "express";
import { login, logout, register } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.delete("/logout", logout);

export default router;
