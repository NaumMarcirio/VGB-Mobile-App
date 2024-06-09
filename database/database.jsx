import * as SQLite from 'expo-sqlite';
import { inserirOuAtualizarUsuario, carregarDadosDoUsuario } from './variaveis';

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
            `CREATE TABLE IF NOT EXISTS jsons_refeicoes (
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

export { db, createTable, createTableJson };