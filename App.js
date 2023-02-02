import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Button,
  Image,
} from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

const Stack = createNativeStackNavigator();
const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6200EE",
    background: "#FFFFFF",
    card: "#FFFFFF",
    text: "#00dd",
  },
};
const DorkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#03DAC6",
    background: "#121212",
    card: "#121212",
    text: "white",
  },
};

export default function App() {
  const scheme = useColorScheme();
  const [data, setData] = useState("");
  const [theme, setTheme] = useState(
    scheme === "dark" ? DorkTheme : LightTheme
  );
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

  if (!fontsLoaded) {
    return <View style={styles.container} />;
  }
  const Logo = ({theme}) => {
    const logo = theme === DorkTheme ? require('./assets/42_dark.png') : require('./assets/42.png');
    return(
    <Image
      style={{ width: 42, height: 42 }}
      source={logo}
      // resizeMode='contain'
    />
)};
  const toggleTheme = () => {
    setTheme(theme === DorkTheme ? DefaultTheme : DorkTheme);
  };
  return (
    <MyContext.Provider value={{ data, setData }}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={({ route }) => ({
            headerTitleAlign: "center",
            headerRight:
              route.name === "About"
                ? () => (
                    <Button
                      title={theme === DorkTheme ? "Light" : "Dark"}
                      onPress={toggleTheme}
                    />
                  )
                : null,
                headerTitle: (props) => <Logo theme={theme}/>
          })}
        >
          <Stack.Group >
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
