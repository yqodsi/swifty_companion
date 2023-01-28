import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import About from "./components/About";

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

const Stack = createNativeStackNavigator();
// SafeAreaView is a component that wraps the content of the screen and adjusts it for the notches and rounded corners of the iPhone X and other newer devices.
export default function App() {
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
  
    <NavigationContainer style={{ fontFamily: 'Ubuntu_300Light_Italic', fontSize: 16, backgroundColor: "red" }}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "white" },
          headerTitleAlign: "center",
          title: "69",
          fontFamily: "Ubuntu",
        }}
      >
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar backgroundColor="white" style="dark" />
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

export const globalStyles = StyleSheet.create({
  text: {
    // fontFamily: "ubuntu",
    fontFamily: "ubuntu",
    fontSize: 24,
    flex: 1,
    backgroundColor: "#fcf",
  },
});
