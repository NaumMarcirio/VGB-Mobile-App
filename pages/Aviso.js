import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const Aviso = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/icone-canto-superior.png')} />
      <View style={styles.areaTexto}>
        <Text style={styles.titulo1}>Bem-vindo ao seu</Text>
        <Text style={styles.titulo2}>GUIA NUTRICIONAL</Text>
        <Text style={styles.subtitulo}>Onde cada escolha alimentar é selecionada para otimizar sua
          saúde e bem-estar!
          Gerado com I.A.</Text>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};  

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c1c1c',
    padding: 20,
  },
  logo: {
    position: 'absolute',
    top: 24,
    left: 24,
    width: 40,
    height: 40,

  },
  areaTexto: {
    position: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
  },

  titulo1: {
    color: '#f1f1f1',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titulo2: {
    color: '#FF8383',
    fontSize: 20,
    marginBottom: 40
  },
  subtitulo: {
    color: 'white',
    fontSize: 16,
    width: '60%',
    textAlign: 'center'

  },
  botao: {
    backgroundColor: '#8BFF9E',
    padding: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    position: 'absolute',
    right: 48,
    bottom: 136,

  },
  botaoTexto: {
    color: '#323232',
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 16,
    fontWeight: 'bold',
  },
});


export default Aviso

