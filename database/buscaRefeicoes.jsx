import { db } from './database';

export const buscaRefeicoes = async () => {
  return new Promise((resolve, reject) => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          "SELECT * FROM refeicoes",
          [],
          (_, { rows: { _array } }) => {
            if (_array.length > 0) {
              resolve(_array);
            } else {
              resolve([]);
            }
          },
          error => {
            console.error("Erro ao carregar dados das refeicoes:", error);
            reject(error);
          }
        );
      });
    } catch (error) {
      console.error("Erro ao carregar dados das refeicoes:", error);
      reject(error);
    }
  });
}
