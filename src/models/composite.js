const comp = ( dados ) => {
    let ordemServico = []
    let aux = []
    dados.forEach(dado => {
        aux.push({
            "id" : dado.id,
            "Funcionario" : dado.id_funcionario,
            "Descricao" : dado.descricao,
            "Custo" : dado.custo
        })
    })
        ordemServico.push(aux)
        ordemServico.push({
            "nome": dados[0].nome,
            "especialidade" : dados[0].especialidade,
            "id" : dados[0].id_funcionario
        })

    return ordemServico
}


module.exports = {comp}