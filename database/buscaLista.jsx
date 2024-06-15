import { db } from './database';

export const buscaLista = async () => {
  return new Promise((resolve, reject) => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          "SELECT * FROM lista ORDER BY ID DESC LIMIT 1",
          [],
          (_, { rows: { _array } }) => {
            if (_array.length > 0) {
              resolve(_array[0]);
            } else {
              resolve(null);
            }
          },
          error => {
            console.error("Erro ao buscar lista:", error);
            reject(error);
          }
        );
      });
    } catch (error) {
      console.error("Erro ao buscar lista:", error);
      reject(error);
    }
  });
};

