import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('infos.db');

// Função para criar a tabela se ainda não existir
const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Nome TEXT,
        Idade INTEGER,
        Altura INTEGER,
        Peso INTEGER,
        Genero TEXT,
        NivelDeAtividade TEXT,
        Gordura INTEGER,
        Calorias INTEGER,
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
};

export { db, createTable };