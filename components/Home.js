import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { HELLO } from "@env";
import React, { useContext } from "react";
import MyContext from "../contexts/";
import { globalStyles } from "../App";

const Home = ({ navigation }) => {
  const { data, setData } = useContext(MyContext);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Login to 42</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("About");
          }}
        >
          <Text style={styles.buttonText}>42</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>made with ❤️ by yqodsi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#E9E8E8",
  },
  wrapper: {
    width: "80%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    // color: "#fff",
    marginBottom: 16,
    fontFamily: "Ubuntu_700Bold",
  },
  description: {
    fontSize: 16,
    // color: "#fff",
    textAlign: "center",
    marginBottom: 32,
    fontFamily: "Ubuntu_400Regular",
  },
  button: {
    // backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#333",
    // shadowColor: "#333",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    // color: "#fff",
    fontFamily: "Ubuntu_700Bold",
  },
  footer: {
    fontSize: 12,
    // color: "#fff",
    marginTop: 30,
    fontFamily: "Ubuntu_400Regular",
    textAlign: "center", // added line
  },
});

export default Home;
