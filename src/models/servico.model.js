const toReadAll = () => {
    return "select * from funcionario";
}

const toReadId = (model) => {
    return `SELECT * FROM vw_func WHERE id_funcionario=${model.id}`;
}

const create = (model) => {
	return `insert into funcionario value(default,'${model.nome}', '${model.especialidade}')`;
}

const toDelete = (model) => {
    return `DELETE FROM funcionario WHERE id = ${model.id}`;
}

const toUpdate = (model) => {
    return `UPDATE funcionario SET 
                nome = '${model.nome}',
                especialidade = '${model.especialidade}'
                WHERE id = ${model.id}`;
}

module.exports = {
    toReadAll,
	toReadId,
    create,
    toDelete,
    toUpdate,
}