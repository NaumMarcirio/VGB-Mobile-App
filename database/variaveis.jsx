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
let Brefeicao_usuario_id = "";
let Bjson_texto = "";
let Brefeicao_id = "";

function BsetRefeicaoId(newRefId) {
  Brefeicao_id = newRefId;
}
function BsetJsonTexto(newJsonTexto) {
  Bjson_texto = newJsonTexto;
}
function BsetUsuarioId(newUsuarioId) {
  Brefeicao_usuario_id = newUsuarioId;
}

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
async function carregarDadosDoJson() {
  try {
    db.transaction(tx => {
      tx.executeSql(
          "SELECT * FROM json_refeicoes",
          [],
          (_, { rows: { _array } }) => {
            if (_array.length > 0) {
              Brefeicao_id = json_refeicoes.ID;
              Brefeicao_usuario_id = json_refeicoes.usuario_id;
              Bjson_texto = json_refeicoes.json_texto;
              console.log("Selecionado os dados");
              console.log(Brefeicao_usuario_id, Bjson_texto);
            } else {
              console.log("Nenhum Json encontrado no banco de dados.");
              Brefeicao_usuario_id = "";
              Bjson_texto = "";
            }
          },
          error => {
            console.error("Erro ao carregar dados do json:", error);
          }
      );
    });
  } catch (error) {
    console.error("Erro ao carregar dados do json:", error);
  }
}
async function inserirOuAtualizarJson() {
  try {
    db.transaction(tx => {
      tx.executeSql(
          "SELECT * FROM json_refeicoes",
          [],
          (_, { rows: { _array } }) => {
            if (_array.length > 0) {
              tx.executeSql(
                  `UPDATE json_refeicoes SET json_texto = ? WHERE usuario_id = ?`,
                  [Bjson_texto, Brefeicao_usuario_id],
                  () => console.log("Atualizado no banco"),
                  error => console.error("Erro ao atualizar dados do Json:", error)
              );
            } else {
              // Se o Json não existe, insira os dados
              tx.executeSql(
                  `INSERT INTO json_refeicoes (json_texto) WHERE usuario_id = ? VALUES (?)`,
                  [Brefeicao_usuario_id, Bjson_texto],
                  () => console.log("Inserido no banco"),
                  error => console.error("Erro ao inserir dados do Json:", error)
              );
            }
          },
          error => {
            console.error("Erro ao verificar a existência do jsob:", error);
          }
      );
    });
    console.log("Dados do jsob inseridos/atualizados com sucesso.");
    carregarDadosDoJson();
  } catch (error) {
    console.error("Erro ao inserir/atualizar dados do json:", error);
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
  Bjson_texto,
  Brefeicao_usuario_id,
  Brefeicao_id,
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
  BsetJsonTexto,
  BsetUsuarioId,
  BsetRefeicaoId,
  carregarDadosDoUsuario,
  inserirOuAtualizarUsuario,
  carregarDadosDoJson,
  inserirOuAtualizarJson
};
