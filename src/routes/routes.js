import express from "express";
import { getHome, getAdd, getRead, postAdd, getUpdate, getHelp, updatePost, getDelete } from "../controller/contosController.js";

export const router = express.Router();

router.get("/", getHome);
router.get("/adicionar", getAdd);
router.post("/adicionar", postAdd)
router.get("/detalhes/:id", getRead);
router.get('/auxilio', getHelp);
router.get('/editar/:id', getUpdate);
router.post('/editar/:id', updatePost)
router.get("/deletar/:id", getDelete)
