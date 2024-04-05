import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import useLoadFonts from "../../hooks/useLoadFonts";
import Colors from "../../constants/Colors";
export { ErrorBundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "BoasVindas",
};

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  useEffect(() => {
    async function prepareApp() {
      try {
        // Impede que a tela de splash seja ocultada automaticamente
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        // Sinaliza que o aplicativo está pronto para ser exibido
        setAppIsReady(true);
      }
    }

    prepareApp();
  }, []);

  useEffect(() => {
    // Oculta a tela de splash manualmente quando as fontes forem carregadas
    if (appIsReady && fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    // Retorna null enquanto o aplicativo está sendo inicializado
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: Colors.cinzaBase },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
        title={false}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
        title={false}
      />
    </Stack>
  );
}
