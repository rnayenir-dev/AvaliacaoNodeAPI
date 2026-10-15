const filmes = new Array(
    
    {titulo: "Titanic", classificacao: "PG-13", descricao: "romance", lancamento: true},
    {titulo: "Matrix", classificacao: "PG-13", descricao: "ficcion", lancamento: true},
    {titulo: "Avengers", classificacao: "PG-13", descricao: "heroes", lancamento: true}
    )

class Filmes {

    Buscar() {
        return filmes
    }
    
    BuscarUm(id) {
        return filmes[id]
    }
    
    Criar(titulo, classificacao, descricao, lancamento) {
        filmes.push(
            { titulo, classificacao, descricao, lancamento }
        )
    }
    
    Alterar(id, titulo, classificacao, descricao, lancamento) {
        filmes[id].titulo = titulo
        filmes[id].classificacao = classificacao
        filmes[id].descricao = descricao
        filmes[id].lancamento = lancamento
    }
    
    AlterarStatus(id) {
        filmes[id].classificacao = !filmes[id].classificacao
    }

    Deletar(id) {
        filmes.splice(id, 1)
    }
}

export default new Filmes()