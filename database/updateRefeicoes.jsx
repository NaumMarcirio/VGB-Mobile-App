import { db } from './database';

export const updateRefeicoes = async (id, status) => {
  try {
    const novoStatus = status === '0' ? '1' : '0';
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE refeicoes SET status = ? WHERE id = ?`,
        [novoStatus, id],
        () => console.log("Refeição atualizada com sucesso"),
        error => console.error("Erro ao atualizar dados da refeição:", error)
      );
    });
    console.log("Dados da refeição foram atualizados com sucesso.");
    return '******************************************************************  deu certo';
  }
  catch (error) {
    console.error("Erro ao atualizar refeição:", error);
  }
};