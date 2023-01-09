import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenContainer } from "react-native-screens";
import { SafeAreaView } from 'react-navigation';
import Home from "./components/Home";
import About from "./components/About";
import axios from "axios";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerStyle: { backgroundColor: "dodgerblue" },
            headerTitleAlign: "center",
            title: "42",
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    height: 80,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navbarTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
