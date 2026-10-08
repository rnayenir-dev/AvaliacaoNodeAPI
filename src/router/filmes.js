import express from "express"
import ControllerFilmes from '../controller/filmes.js'

const router = express.Router()

router.get("/titulo", ControllerFilmes.Titulo)               //ESTOS
router.get("/classificacao/:id", ControllerFilmes.Classificacao) //FALTA VER
router.post("/descricao", ControllerFilmes.Descricao)          // SI SIGUEN SIENDO
router.put("/lanzamento/:id", ControllerFilmes.Lanzamento) // O CAMBIAN: router.get, post, etc.

//router.delete("/eliminar/:id", ControllerFilmes.Eliminar)

export default router