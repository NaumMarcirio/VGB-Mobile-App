import * as SQLite from 'expo-sqlite';
import { inserirOuAtualizarUsuario, carregarDadosDoUsuario, carregarDadosDaLista } from './variaveis';

const db = SQLite.openDatabase('infos.db');

// Função para criar a tabela se ainda não existir
const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS usuario (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Nome TEXT,
        Idade TEXT,
        Altura TEXT,
        Peso TEXT,
        Genero TEXT,
        NivelDeAtividade TEXT,
        Gordura TEXT,
        Calorias TEXT,
        HistoricoMedico TEXT,
        Intolerancias TEXT,
        ExcluirAlimentos TEXT
      );`,
            [],
            (_, result) => {
                console.log('Tabela de usuários criada com sucesso!');
            },
            (_, error) => {
                console.log('Erro ao criar tabela de usuários:', error);
            }
        );
    });

    carregarDadosDoUsuario()
    inserirOuAtualizarUsuario()
};
const createTableJson = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS json_refeicoes (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        json_texto TEXT,
        usuario_id INTEGER,
        FOREIGN KEY(usuario_id) REFERENCES usuario(ID)
      );`,
            [],
            (_, result) => {
                console.log('Tabela de usuários criada com sucesso!');
            },
            (_, error) => {
                console.log('Erro ao criar tabela de usuários:', error);
            }
        );
    });

    carregarDadosDoJson()
    inserirOuAtualizarJson()
};
const createTableLista = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS json_lista (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        json_ingrediente TEXT,
        usuario_id INTEGER,
        check BOOLEAN,
        FOREIGN KEY(usuario_id) REFERENCES usuario(ID)
      );`,
            [],
            (_, result) => {
                console.log('Tabela de listas criada com sucesso!');
            },
            (_, error) => {
                console.log('Erro ao criar tabela de listas:', error);
            }
        );
    });

    carregarDadosDaLista()
    inserirOuAtualizarLista()
};


const refeicoes = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS refeicoes (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        texto TEXT,
        status char(1)
      );`,
            [],
            (_, result) => {
                console.log('Tabela de reifecoes criada com sucesso!');
            },
            (_, error) => {
                console.log('Erro ao criar tabela de reifecoes:', error);
            }
        );
    });

};

export { db, createTable, createTableJson, createTableLista, refeicoes };