import { db } from './database';

export const dropRefeicoes = async () => {
  try {
    db.transaction(tx => {
      tx.executeSql(
        `DROP TABLE IF EXISTS refeicoes`,
        [],
        () => console.log("Tabela 'refeicoes' removida com sucesso"),
        error => console.error("Erro ao remover a tabela 'refeicoes':", error)
      );
    });
    console.log("Comando para remover a tabela 'refeicoes' foi executado com sucesso.");
    return '******************************************************************  deu certo';
  }
  catch (error) {
    console.error("Erro ao tentar remover a tabela 'refeicoes':", error);
  }
};