const servico = require('../models/servico.model.js');
const compo = require('../models/composite')
const con = require('../dao/dao.js');

const listarFunc = (req, res) => {
    con.query(servico.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const listarFuncId = (req, res) => {
    con.query(servico.toReadId(req.params), (err, result) => {
        if (err == null) {
            if (result.length > 0) {
                let aux = compo.comp(result)
                res.json(aux).end();
            } else {
                res.status(404).json(result).end();
            }

        } else {
            res.status(500).json(err).end();
        }
    });
}

const del = (req, res) => {
    con.query(servico.toDelete(req.params), (err, result) => {
        if (err == null) {
            if (result.affectedRows == 1) {
                res.json(result).end();
            } else
                res.status(404).json().end();
        } else {
            res.status(500).json(err).end();
        }
    });
}

const criarFunc = async (req, res) => {
    con.query(servico.create(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const alterarFunc = async (req, res) => {
    con.query(servico.toUpdate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    listarFunc,
    listarFuncId,
    criarFunc,
    alterarFunc,
    del
}