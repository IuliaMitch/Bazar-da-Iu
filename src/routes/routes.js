import express from "express";
import { getHome, getAdd } from "../controller/contosController.js"


export const router = express.Router();


router.get("/", getHome)
router.get("/adicionar", getAdd)