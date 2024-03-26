import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="ListaCompras" />
      <Tabs.Screen name="GuiaAlimentar" />
      <Tabs.Screen name="PerfilUsuario" />
    </Tabs>
  );
};

export default Layout;
