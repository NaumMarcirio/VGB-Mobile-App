import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import Colors from "../../../../constants/Colors";

const GuiaAlimentarNav = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="GerarGuia"
        options={{ headerShown: false }}
        title={true}
      />
      <Stack.Screen
        name="GuiaAlimentar"
        options={{ headerShown: false }}
        title={true}
      />
      
    </Stack>
  );
};

export default GuiaAlimentarNav;
