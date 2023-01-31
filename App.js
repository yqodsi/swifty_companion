import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { NavigationContainer,DefaultTheme, DarkTheme, } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  
} from "@react-navigation/native-stack";
import Home from "./components/Home";
import About from "./components/About";
import { useState } from "react";
import MyContext from "./contexts/";

import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from "@expo-google-fonts/ubuntu";
// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: "rgb(255, 45, 85)",
//     text: "#000",
//     background: "#E9E8E8",
//   },
// };
const Stack = createNativeStackNavigator();
// SafeAreaView is a component that wraps the content of the screen and adjusts it for the notches and rounded corners of the iPhone X and other newer devices.
export default function App() {
  const scheme = useColorScheme();
  const [data, setData] = useState("");
  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });
  console.log(fontsLoaded);
  if (!fontsLoaded) {
    return <View style={styles.container} />;
  }
  return (
    <MyContext.Provider value={{ data, setData }}>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#E9E8E8" },
            headerTitleAlign: "center",
            title: "69",
          }}
        >
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
          </Stack.Group>
        </Stack.Navigator>
        <StatusBar backgroundColor="white" style="dark" />
      </NavigationContainer>
    </MyContext.Provider>
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

export const globalStyles = StyleSheet.create({
  text: {
    fontFamily: "Ubuntu_400Regular",
    flex: 1,
    // alignItems: "center",
    fontSize: 24,
    justifyContent: "center",
  },
});
