import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveBackgroundColor: Colors.pretoBase,
        tabBarActiveBackgroundColor: Colors.verdeBase,
        headerShown: false,
        tabBarActiveTintColor: Colors.pretoBase,
      }}
    >
      <Tabs.Screen
        name="ListaCompras"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ }) => (
            <Ionicons
              style={{ marginTop: 9 }}
              name="list"
              size={27}
              color="white"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="GuiaAlimentar"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ }) => (
            <Ionicons
              style={{ marginTop: 9 }}
              name="calendar-outline"
              size={27}
              color="white"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="PerfilUsuario"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ }) => (
            <Ionicons
              style={{ marginTop: 9 }}
              name="person"
              size={27}
              color="white"
            />
          ),
          href: '/PerfilUsuario/QrCodeScreen'
        }}
      />
    </Tabs>
  );
};

export default Layout;
