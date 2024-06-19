import React, { useState, useEffect } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Botoes from "../Botoes";
import { useRouter } from "expo-router";
import {
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
  inserirOuAtualizarUsuario,
} from "../../database/variaveis";

const FormularioHistorico = () => {
  const router = useRouter();
  const [historico, setHistorico] = useState(Bhistorico_medico);

  useEffect(() => {
    inserirOuAtualizarUsuario();
  }, []);

  const handleSubmit = () => {
    BsetHistoricoMedico(historico);

    inserirOuAtualizarUsuario();

    router.push(`PerfilUsuario/ProblemasAlimentares`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHistorico}>
        <Text style={styles.label}>Histórico Médico</Text>
        <TextInput
          value={historico.toString()}
          onChangeText={setHistorico}
          placeholder="Ex: Hipertensão, diabetes, AVC"
          placeholderTextColor={Colors.cinzaBase}
          style={{
            height: 250,
            width: 300, // Alterado para preencher todo o espaço disponível
            borderWidth: 1,
            borderRightColor: Colors.brancoBase,
            borderLeftColor: Colors.brancoBase,
            borderTopColor: Colors.brancoBase,
            borderBottomColor: Colors.brancoBase,
            borderTopRightRadius: 24,
            borderBottomLeftRadius: 24,
            paddingLeft: 18,
            paddingTop: 12,
            paddingRight: 18, // Largura do input
            textAlignVertical: "top",
            fontSize: 16, // Alinha o texto verticalmente para o topo
            color: Colors.brancoBase,
          }}
          multiline={true} // Permite várias linhas
          numberOfLines={10}
          inputMode="text"
        />
      </View>
      <View style={styles.botao}>
        <Botoes
          texto="Próximo"
          urlAnterior={"PerfilUsuario/Fisico"}
          ativo={true}
          submit={handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    gap: 12,
  },
  containerHistorico: {
    flexDirection: "column",
    paddingTop: 80,
  },
  botao: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: -450,
  },
  inputMaior: {
    height: 200,
    width: 300, // Alterado para preencher todo o espaço disponível
    borderWidth: 1,
    borderRightColor: Colors.brancoBase,
    borderLeftColor: Colors.brancoBase,
    borderTopColor: Colors.brancoBase,
    borderBottomColor: Colors.brancoBase,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    paddingLeft: 18,
    paddingTop: 12,
    fontSize: 16,
  },

  label: {
    color: Colors.brancoBase,
    fontSize: 16,
    fontFamily: "KodChasanMedium",
    paddingBottom: 30,
  },
});

export default FormularioHistorico;
