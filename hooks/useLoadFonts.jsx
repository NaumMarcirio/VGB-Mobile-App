import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
    KodChasanRegular: require("../assets/fonts/Kodchasan-Regular.ttf"),
    KodChasanSemiBold: require("../assets/fonts/Kodchasan-SemiBold.ttf"),
    KodChasanMedium: require("../assets/fonts/Kodchasan-Medium.ttf"),
    KodChasanBold: require("../assets/fonts/Kodchasan-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
};

export default useLoadFonts;
