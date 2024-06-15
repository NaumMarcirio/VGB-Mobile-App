import { db } from './database';


export const inserirLista = async (TextoLista) => {
  try {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO lista (texto) VALUES (?)`,
        [TextoLista],
        () => console.log("Inserido na tabela lista"),
        error => console.error("Erro ao inserir dados na lista:", error)
      );

    },
    );
    console.log("Dados da lista foram inseridas com sucesso.");
    return '******************************************************************  deu certo'
  }
  catch (error) {
    console.error("teste");
  }
}
