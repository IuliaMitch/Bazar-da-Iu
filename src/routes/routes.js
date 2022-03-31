import express from "express";
import { getHome, getAdd, getRead } from "../controller/contosController.js"


export const router = express.Router();


router.get("/", getHome)
router.get("/adicionar", getAdd)
router.get("/detalhes/:id", getRead)
// router.get("/deletar/:id", getDelete)