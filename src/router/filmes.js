import express from "express"
import ControllerFilmes from '../controller/filmes.js'

const router = express.Router()

//busca todos - endpoint - controller.funcao
router.get("/buscar", ControllerFilmes.Buscar)               

//busca um - id
router.get("/buscarUm/:id", ControllerFilmes.BuscarUm) 

//criar
router.post("/criar", ControllerFilmes.Criar)          

//alterar
router.put("/alterar/:id", ControllerFilmes.Alterar) 

//alterarstatus
router.put("/alterarStatus/:id", ControllerFilmes.AlterarStatus) 

//deletar
router.delete("/eliminar/:id", ControllerFilmes.Deletar)

export default router