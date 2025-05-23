import { Stack } from "expo-router";

// Função auxiliar para criar configurações de tela de forma fluente
function createScreen(name, title, options = {}) {
  return {
    name,
    options: {
      headerShown: false,
      title,
      ...options,
    },
  };
}

const GuiaAlimentarNav = () => (
  <Stack
    screenOptions={{
      headerShown: false,
    }}
  >
    { [
      createScreen("GerarGuia", "Gerar Guia Alimentar"),
      createScreen("GuiaAlimentar", "Visualizar Guia Alimentar"),
    ].map((screen) => (
      <Stack.Screen key={screen.name} {...screen} />
    )) }
  </Stack>
);

export default GuiaAlimentarNav;
