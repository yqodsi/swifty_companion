import { View, Text, Button } from "react-native";
import React from "react";
import { useContext } from "react";
import MyContext from "../contexts/";
import { useTheme } from '@react-navigation/native';
export default function About({navigation}) {
  const { colors } = useTheme();
  const { data, setData } = useContext(MyContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

      <Text style={{color: colors.text}}>About Screen {data}</Text>
      <Button title="Go to Home" onPress={() => {
        navigation.navigate("Home")
        setData("Hello")
        }} />
    </View>
  );
}
