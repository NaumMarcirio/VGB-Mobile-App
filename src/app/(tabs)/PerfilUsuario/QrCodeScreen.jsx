import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, Image } from "react-native";
import Colors from "../../../../constants/Colors";
import Header from "../../../../components/Header";
import Botoes from "../../../../components/Botoes";
import { useRouter } from "expo-router";

const QrCodeScreen = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("PerfilUsuario/InfoGerais");
  };
  return (
    <LinearGradient
      colors={[Colors.grdienteInicio, Colors.gradienteFim]}
      style={styles.containerGlobal}
    >
      <View style={styles.container}>
        <Header ativo={true} />
        <Text style={styles.textoQrCode}>Alterar dados</Text>
        <Image
          source={require("../../../../assets/images/ic_round-qr-code-2.png")}
          style={styles.imagemQrCode}
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
  imagemQrCode: {
    height: 250,
    width: 250,
  },
  textoQrCode: {
    color: Colors.brancoBase,
    fontSize: 16,
    fontFamily: "KodChasanRegular",
    marginTop: 120,
  },
});

export default QrCodeScreen;
