const nomes = new Array("Titanic", "PG-13", "romance, tragedia, inspirado na vida real", "1997")



class Filmes {
    Titulo() {
        return nomes
    }

    Classificacao(id) {
        return nomes[id]
    }

    // esssa é a dica que consigo te dar
    Descricao(titulo, classificacao, descricao, lancamento) {
        nomes.push(nome)
    }

    Lanzamento(id, nome) {
        nomes[id] = nome
    }

   // Eliminar(id) {
   //     nomes.splice(id, 1)
   // }
}

export default new Filmes()