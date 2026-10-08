import ServiceFilmes from '../service/filmes.js'

class ControllerFilmes {

    Titulo(req, res) {
        try {
            const nomes = ServiceFilmes.Titulo()

            res.send({ nomes })
        } catch (e) {
            res.send({ message: e.message })
        }
    }

    Classificacao(req, res) {
        try {
            const id = req.params.id
            const nome = ServiceFilmes.Classificacao(id)

            res.send({ nome })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Descricao(req, res) {
        try {
            const nome = req.body.nome
            ServiceFilmes.Descricao(nome)

            res.send({ message: "romance, tragedia, inspirado na vida real" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    Lanzamento(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            ServiceFilmes.Lanzamento(id, nome)

            res.send({ message: "1997" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    // Eliminar(req, res) {
    // try {
    //        const id = req.params.id
    //        ServiceFilmes.Eliminar(id)
    //        
    //        res.send({ message: "Deletado com sucesso!" })
    //    } catch (error) {
    //        res.send({ message: error.message })
    //    }
    //}

}

export default new ControllerFilmes()