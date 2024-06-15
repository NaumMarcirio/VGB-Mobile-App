import { db } from './database';


export const inserirRefeicao = async (xRefeicao) => {
  try {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO refeicoes (texto, status) VALUES (?, ?)`,
        [xRefeicao, '0'],
        () => console.log("Inserido no banco"),
        error => console.error("Erro ao inserir dados da refeicao:", error)
      );

    },
    );
    console.log("Dados da refeicao foram inseridas com sucesso.");
    return '******************************************************************  deu certo'
  }
  catch (error) {
    console.error("teste");
  }
}

