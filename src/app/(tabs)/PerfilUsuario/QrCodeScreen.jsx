import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, Image } from "react-native";
import Colors from "../../../../constants/Colors";
import Header from "../../../../components/Header";
import Botoes from "../../../../components/Botoes";
import { useRouter } from "expo-router";
import React from "react";

// Builder fluente para compor a tela
class ScreenBuilder {
  constructor() {
    this.elements = [];
  }
  withHeader(props) {
    this.elements.push(<Header key="header" {...props} />);
    return this;
  }
  withConteudoQrCode({ styles, handleSubmit }) {
    this.elements.push(
      <View key="conteudo" style={styles.containerConteudo}>
        <Text style={styles.textoQrCode}>Alterar dados</Text>
        <Image
          style={styles.imagemQrCode}
          source={require("../../../../assets/images/ic_round-qr-code-2.png")}
        />
        <View style={styles.botaoQRCODE}>
          <Botoes
            texto="Ler QR Code"
            ativo={false}
            urlAnterior="PerfilUsuario/InfoGerais"
            submit={handleSubmit}
          />
        </View>
      </View>
    );
    return this;
  }
  build() {
    return this.elements;
  }
}

const QrCodeScreen = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("PerfilUsuario/InfoGerais");
  };

  const content = new ScreenBuilder()
    .withHeader({ ativo: true })
    .withConteudoQrCode({ styles, handleSubmit })
    .build();

  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>{content}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    gap: 70,
  },
  qrContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerConteudo: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 80,
    marginBottom: 48,
  },
  imagemQrCode: {
    height: 250,
    width: 250,
  },
  textoQrCode: {
    color: Colors.brancoBase,
    fontSize: 20,
    fontFamily: "KodChasanBold",
    marginTop: 120,
  },
  botaoQRCODE: {},
});

export default QrCodeScreen;
