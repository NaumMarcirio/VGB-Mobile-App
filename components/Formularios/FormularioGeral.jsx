import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, StyleSheet } from "react-native";
import RadioButtonRN from "radio-buttons-react-native";
import Colors from "../../constants/Colors";
import Botoes from "../Botoes";
import { db } from '../../database/database';
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
  inserirOuAtualizarUsuario
} from '../../database/variaveis';


const FormularioGeral = () => {
  const router = useRouter();
  const [nome, setNome] = useState(Bnome);
  const [idade, setIdade] = useState(Bidade);
  const [peso, setPeso] = useState(Bpeso);
  const [altura, setAltura] = useState(Baltura);
  const [genero, setGenero] = useState(Bgenero);


  useEffect(() => {
    inserirOuAtualizarUsuario();
  }, []);


  const generoEscolha = [
    { label: "Masculino", value: "Masculino" },
    { label: "Feminino", value: "Feminino" },
  ];

  const handleSubmit = () => {
    BsetNome(nome)
    BsetIdade(idade)
    BsetAltura(altura)
    BsetPeso(peso)
    BsetGenero(genero)

    inserirOuAtualizarUsuario()

    router.push(`/PerfilUsuario/Fisico`)

  };

  return (
    <View style={styles.container}>
      <View style={styles.containerNome}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          value={nome.toString()}
          style={styles.inputMaior}
          onChangeText={setNome}
          color={Colors.brancoBase}
          inputMode="text"
        />
      </View>
      <View style={styles.containerIdade}>
        <Text style={styles.label}>Idade</Text>
        <TextInput
          value={idade.toString()}
          onChangeText={setIdade}
          style={styles.inputMaior}
          color={Colors.brancoBase}
          inputMode="numeric"
        />
      </View>
      <View style={styles.containerAlturaPeso}>
        <View
          style={{
            flexDirection: "row",
            gap: 30,
          }}
        >
          <Text style={styles.label}>Altura</Text>
          <TextInput
            value={altura.toString()}
            style={styles.inputMenor}
            onChangeText={setAltura}
            color={Colors.brancoBase}
            inputMode="decimal"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 30,
          }}
        >
          <Text style={styles.label}>Peso</Text>
          <TextInput
            value={peso.toString()}
            style={styles.inputMenor}
            onChangeText={setPeso}
            color={Colors.brancoBase}
            inputMode="decimal"
          />
        </View>
      </View>
      <View style={styles.containerGenero}>
        <Text style={styles.label}>Gênero</Text>
        <View>
          <RadioButtonRN
            circleSize={14}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 12,
              alignItems: "center",
            }}
            boxStyle={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 24,
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 0,
              width: 144,
              gap: 12,
              paddingLeft: 18,
            }}
            textStyle={{
              fontFamily: "KodChasanMedium",
              fontSize: 14,
            }}
            data={generoEscolha}
            selectedBtn={(value) => setGenero(value.value)}
            activeColor={Colors.vermelhoBase}
            textColor={Colors.brancoBase}
            boxActiveBgColor={"transparent"}
            boxDeactiveBgColor={"transparent"}
          />
        </View>
      </View>
      <View style={styles.botao}>
        <Botoes
          texto="Próximo"
          urlAnterior={""}
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
  containerNome: {
    flexDirection: "row",
    alignItems: "center",
    gap: 100,
    paddingTop: 80,
  },
  containerIdade: {
    flexDirection: "row",
    alignItems: "center",
    gap: 100,
    paddingTop: 40,
  },
  containerAlturaPeso: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
  },
  containerGenero: {
    flexDirection: "column",
    paddingTop: 40,
  },
  inputMaior: {
    height: 20,
    width: 180,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.brancoBase,
    borderBottomLeftRadius: 24,
    alignItems: "center",
    paddingLeft: 18,
    paddingBottom: 4,
  },
  botao: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: -450,
  },
  inputMenor: {
    height: 20,
    width: 80,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.brancoBase,
    borderBottomLeftRadius: 24,
    alignItems: "center",
    paddingLeft: 18,
    paddingBottom: 4,
  },
  label: {
    color: Colors.brancoBase,
    fontSize: 14,
    fontFamily: "KodChasanMedium",
  },
  radioInput: {
    flexDirection: "row",
    width: 12,
    activeColor: Colors.verdeBase,
  },
});

export default FormularioGeral;
