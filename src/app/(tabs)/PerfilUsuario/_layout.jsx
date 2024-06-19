import { Stack } from "expo-router";
import Colors from "../../../../constants/Colors";

const PerfilUsuarioNav = () => {
  return (
    <Stack>
      <Stack.Screen
        name="QrCodeScreen"
        options={{ headerShown: false }}
        title={true}
      />
      <Stack.Screen
        name="InfoGerais"
        options={{ headerShown: false }}
        title={true}
      />
      <Stack.Screen
        name="Fisico"
        options={{ headerShown: false }}
        title={true}
      />
      <Stack.Screen
        name="Historico"
        options={{ headerShown: false }}
        title={true}
      />
      <Stack.Screen
        name="ProblemasAlimentares"
        options={{ headerShown: false }}
        title={true}
      />
      <Stack.Screen
        name="NaoIncluir"
        options={{ headerShown: false }}
        title={true}
      />
    </Stack>
  );
};

export default PerfilUsuarioNav;
