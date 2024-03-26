import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import Colors from "../../../../constants/Colors";

const PerfilUsuarioNav = () => {
  return (
    <Stack>
      <Stack.Screen
        name="InfoGerais"
        options={{ headerShown: true }}
        title={true}
      />
      <Stack.Screen
        name="Fisico"
        options={{ headerShown: true }}
        title={true}
      />
      <Stack.Screen
        name="Historico"
        options={{ headerShown: true }}
        title={true}
      />
      <Stack.Screen
        name="ProblemasAlimentares"
        options={{ headerShown: true }}
        title={true}
      />
      <Stack.Screen
        name="NaoIncluir"
        options={{ headerShown: true }}
        title={true}
      />
    </Stack>
  );
};

export default PerfilUsuarioNav;
