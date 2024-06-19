import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Colors from "../../constants/Colors";
import RadioButtonRN from "radio-buttons-react-native";
import Botoes from "../Botoes";
import { useRouter } from "expo-router";
import {
  Bnivel_de_atividade,
  Bgordura,
  Bcalorias,
  BsetNivelDeAtividade,
  BsetGordura,
  BsetCalorias,
  inserirOuAtualizarUsuario,
} from "../../database/variaveis";

const FormularioFisico = () => {
  const router = useRouter();
  const [nivelAtividade, setNivelAtividade] = useState(Bnivel_de_atividade);
  const [gordura, setGordura] = useState(Bgordura);
  const [caloriasDiarias, setCaloriasDiarias] = useState(Bcalorias);

  useEffect(() => {
    inserirOuAtualizarUsuario();
  }, []);

  const handleSubmit = () => {
    BsetNivelDeAtividade(nivelAtividade);
    BsetGordura(gordura);
    BsetCalorias(caloriasDiarias);

    inserirOuAtualizarUsuario();

    router.push(`PerfilUsuario/Historico`);
  };

  const nivelAtividadeDados = [
    { label: "Baixo", value: "Baixo" },
    { label: "Médio", value: "Medio" },
    { label: "Alto", value: "Alto" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.tituloPagina}>Físico</Text>
      <View>
        <View style={styles.containerNivelAtividade}>
          <Text style={styles.label}>Nivel de Atividade</Text>
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
                width: 102,
                gap: 12,
                paddingLeft: 18,
              }}
              textStyle={{
                fontFamily: "KodChasanMedium",
                fontSize: 14,
              }}
              data={nivelAtividadeDados}
              selectedBtn={(value) => setNivelAtividade(value.value)}
              activeColor={Colors.vermelhoBase}
              textColor={Colors.brancoBase}
              boxActiveBgColor={"transparent"}
              boxDeactiveBgColor={"transparent"}
            />
          </View>
        </View>
        <View style={styles.containerGordura}>
          <Text style={styles.label}>% De Gordura</Text>
          <TextInput
            value={gordura.toString()}
            onChangeText={setGordura}
            style={styles.inputMaior}
            color={Colors.brancoBase}
            inputMode="numeric"
          />
        </View>
        <View style={styles.containerCaloriasDiarias}>
          <Text style={styles.label}>Calorias Diárias</Text>
          <TextInput
            value={caloriasDiarias.toString()}
            onChangeText={setCaloriasDiarias}
            style={styles.inputMaior}
            color={Colors.brancoBase}
            inputMode="numeric"
          />
        </View>
      </View>
      <View style={styles.botao}>
        <Botoes
          texto="Próximo"
          ativo={true}
          urlAnterior="PerfilUsuario/InfoGerais"
          submit={handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 90 },

  tituloPagina: {
    marginLeft: 135,
    color: Colors.brancoBase,
    fontFamily: "KodChasanBold",
    fontSize: 20,
  },
  containerNivelAtividade: {
    flexDirection: "column",
    paddingTop: 40,
  },
  containerGordura: {
    flexDirection: "row",
    alignItems: "center",
    gap: 55,
    paddingTop: 80,
  },
  botao: {
    paddingTop: 1,
    alignSelf: "flex-end",
    paddingTop: 570,
    position: "absolute",
    paddingRight: 7,
  },

  containerCaloriasDiarias: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 150,
    justifyContent: "space-between",
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
    fontSize: 16,
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
    fontSize: 16,
  },
  label: {
    color: Colors.brancoBase,
    fontSize: 16,
    fontFamily: "KodChasanMedium",
  },
  radioInput: {
    flexDirection: "row",
    width: 12,
    activeColor: Colors.verdeBase,
  },
});

export default FormularioFisico;
