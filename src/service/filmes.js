import Filmes from '../model/filmes.js'

class ServiceFilmes {

    Titulo() {
        return Filmes.Titulo()
    }
    
    Classificacao(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return Filmes.Classificacao(id)
    }
    
    Descricao(nome) {
        if(!nome) {
            throw new Error("Favor informar o nome")
        }
        
        Filmes.Descricao(nome)
    }
    
    Lanzamento(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados")
        }
        
        Filmes.Lanzamento(id, nome)
    }

    //Deletar(id) {
    //    if(!id || isNaN(id)) {
    //        throw new Error("Favor informar o Id corretamente")
    //    }
        
    //    Pessoa.Deletar(id)
    //}
    
}

export default new ServiceFilmes()