DROP DATABASE IF EXISTS servico;

CREATE DATABASE servico;

USE servico;

CREATE TABLE funcionario (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nome VARCHAR(153) NOT NULL,
	especialidade VARCHAR(153) NOT NULL
);

CREATE TABLE ordemServico (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	id_funcionario INTEGER NOT NULL,
	descricao VARCHAR(100) NOT NULL,
	custo DOUBLE(5,2) NOT NULL,
	FOREIGN KEY (id_funcionario) REFERENCES funcionario (id) ON DELETE CASCADE
);

CREATE VIEW vw_func AS
SELECT o.id, o.id_funcionario, o.descricao, o.custo, f.nome, f.especialidade  from funcionario f
right JOIN ordemServico o ON o.id_funcionario = f.id;

INSERT INTO funcionario VALUES (DEFAULT, 'Ana', 'Encanador');
INSERT INTO funcionario VALUES (DEFAULT, 'Juliana', 'Eletricista');
INSERT INTO funcionario VALUES (DEFAULT, 'Ivana', 'Pedreiro');
INSERT INTO funcionario VALUES (DEFAULT, 'Fabiana', 'Pintor');

INSERT INTO ordemServico VALUES (DEFAULT, '2', 'arrumar cafeteira', 100);
INSERT INTO ordemServico VALUES (DEFAULT, '3', 'instalar piso', 150);
INSERT INTO ordemServico VALUES (DEFAULT, '1', 'trocar caixa de gordura', 180);
INSERT INTO ordemServico VALUES (DEFAULT, '4', 'pintar parede do quintal', 250);
INSERT INTO ordemServico VALUES (DEFAULT, '4', 'pintar parede do quintal', 250);