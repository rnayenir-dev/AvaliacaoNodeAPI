import ServiceFilmes from '../service/filmes.js'

class ControllerFilmes {

    Buscar(req, res) {
        try {
            const filmes = ServiceFilmes.Buscar()

            res.send({ filmes })
        } catch (error) {
            res.send({ messagem: error.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params
            const filme = ServiceFilmes.BuscarUm(id)

            res.send({ filme })
        } catch (error) {
            res.send({ messagem: error.message })
        }
    }

    Criar(req, res) {
        try {
            const {titulo, classificacao, descricao, lancamento} = req.body

            ServiceFilmes.Criar(titulo, classificacao, descricao, lancamento)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    Alterar(req, res) {
        try {
            const id = req.params.id
            const {titulo, classificacao, descricao, lancamento} = req.body
            
            ServiceFilmes.Alterar(id, titulo, classificacao, descricao, lancamento)

            res.send({ message: "Alterado com sucesso" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
      AlterarStatus(req, res) {
        try {
            const id = req.params.id
            
            ServiceFilmes.AlterarStatus(id)

            res.send({ message: "Alterado com sucesso" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Deletar(req, res) {
        try {
            const id = req.paramsid
            
            ServiceFilmes.Deletar(id)

            res.send({ mensagem: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

}

export default new ControllerFilmes()