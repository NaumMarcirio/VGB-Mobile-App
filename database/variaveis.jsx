import { db } from './database';

let Bid = 1;
let Bnome = "";
let Bidade = "";
let Baltura = "";
let Bpeso = "";
let Bgenero = "";
let Bnivel_de_atividade = "";
let Bgordura = "";
let Bcalorias = "";
let Bhistorico_medico = "";
let Bintolerancias = "";
let Bexcluir_alimentos = "";

function BsetId(newId) {
  Bid = newId;
}

function BsetNome(newNome) {
  Bnome = newNome;
}

function BsetIdade(newIdade) {
  Bidade = newIdade;
}

function BsetAltura(newAltura) {
  Baltura = newAltura;
}

function BsetPeso(newPeso) {
  Bpeso = newPeso;
}

function BsetGenero(newGenero) {
  Bgenero = newGenero;
}

function BsetNivelDeAtividade(newNivelDeAtividade) {
  Bnivel_de_atividade = newNivelDeAtividade;
}

function BsetGordura(newGordura) {
  Bgordura = newGordura;
}

function BsetCalorias(newCalorias) {
  Bcalorias = newCalorias;
}

function BsetHistoricoMedico(newHistoricoMedico) {
  Bhistorico_medico = newHistoricoMedico;
}

function BsetIntolerancias(newIntolerancias) {
  Bintolerancias = newIntolerancias;
}

function BsetExcluirAlimentos(newExcluirAlimentos) {
  Bexcluir_alimentos = newExcluirAlimentos;
}

async function carregarDadosDoUsuario() {
  try {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM usuario",
        [],
        (_, { rows: { _array } }) => {
          if (_array.length > 0) {
            const usuario = _array[0]; // Supondo que haja apenas um usuário no banco de dados
            Bid = usuario.ID;
            Bnome = usuario.Nome;
            Bidade = usuario.Idade;
            Baltura = usuario.Altura;
            Bpeso = usuario.Peso;
            Bgenero = usuario.Genero;
            Bnivel_de_atividade = usuario.NivelDeAtividade;
            Bgordura = usuario.Gordura;
            Bcalorias = usuario.Calorias;
            Bhistorico_medico = usuario.HistoricoMedico;
            Bintolerancias = usuario.Intolerancias;
            Bexcluir_alimentos = usuario.ExcluirAlimentos;

            console.log("Selecionado os dados");
            console.log(Bid, Bnome, Bidade, Baltura, Bpeso, Bgenero, Bnivel_de_atividade, Bgordura, Bcalorias, Bhistorico_medico, Bintolerancias, Bexcluir_alimentos);
          } else {
            console.log("Nenhum usuário encontrado no banco de dados.");
            Bid = 1;
            Bnome = "";
            Bidade = "";
            Baltura = "";
            Bpeso = "";
            Bgenero = "";
            Bnivel_de_atividade = "";
            Bgordura = "";
            Bcalorias = "";
            Bhistorico_medico = "";
            Bintolerancias = "";
            Bexcluir_alimentos = "";
          }
        },
        error => {
          console.error("Erro ao carregar dados do usuário:", error);
        }
      );
    });
  } catch (error) {
    console.error("Erro ao carregar dados do usuário:", error);
  }
}

async function inserirOuAtualizarUsuario() {
  try {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM usuario",
        [],
        (_, { rows: { _array } }) => {
          if (_array.length > 0) {
            // Se o usuário já existe, atualize seus dados
            tx.executeSql(
              `UPDATE usuario SET Nome = ?, Idade = ?, Altura = ?, Peso = ?, Genero = ?, NivelDeAtividade = ?, Gordura = ?, Calorias = ?, HistoricoMedico = ?, Intolerancias = ?, ExcluirAlimentos = ?`,
              [Bnome, Bidade, Baltura, Bpeso, Bgenero, Bnivel_de_atividade, Bgordura, Bcalorias, Bhistorico_medico, Bintolerancias, Bexcluir_alimentos],
              () => console.log("Atualizado no banco"),
              error => console.error("Erro ao atualizar dados do usuário:", error)
            );
          } else {
            // Se o usuário não existe, insira os dados
            tx.executeSql(
              `INSERT INTO usuario (Nome, Idade, Altura, Peso, Genero, NivelDeAtividade, Gordura, Calorias, HistoricoMedico, Intolerancias, ExcluirAlimentos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
              [Bnome, Bidade, Baltura, Bpeso, Bgenero, Bnivel_de_atividade, Bgordura, Bcalorias, Bhistorico_medico, Bintolerancias, Bexcluir_alimentos],
              () => console.log("Inserido no banco"),
              error => console.error("Erro ao inserir dados do usuário:", error)
            );
          }
        },
        error => {
          console.error("Erro ao verificar a existência do usuário:", error);
        }
      );
    });
    console.log("Dados do usuário inseridos/atualizados com sucesso.");
    carregarDadosDoUsuario();
  } catch (error) {
    console.error("Erro ao inserir/atualizar dados do usuário:", error);
  }
}

export {
  Bid,
  Bnome,
  Bidade,
  Baltura,
  Bpeso,
  Bgenero,
  Bnivel_de_atividade,
  Bgordura,
  Bcalorias,
  Bhistorico_medico,
  Bintolerancias,
  Bexcluir_alimentos,
  BsetId,
  BsetNome,
  BsetIdade,
  BsetAltura,
  BsetPeso,
  BsetGenero,
  BsetNivelDeAtividade,
  BsetGordura,
  BsetCalorias,
  BsetHistoricoMedico,
  BsetIntolerancias,
  BsetExcluirAlimentos,
  carregarDadosDoUsuario,
  inserirOuAtualizarUsuario
};
