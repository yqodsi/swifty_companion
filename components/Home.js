import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    
      <View style={styles.container}>
        {/* <Image
        source={require('./google-logo.png')}
        style={styles.logo}
      /> */}
        <View style={styles.wrapper}>
          <Text style={styles.title}>Login to 42</Text>
          <Text style={styles.description}>
            Log in to access your Google account and all its features.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("About");
            }}
          >
            <Text style={styles.buttonText}>42</Text>
          </TouchableOpacity>
          <Text style={styles.footer}>
            By logging in, you agree to our terms of service and privacy policy.
          </Text>
        </View>
      </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 128,
    height: 128,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  footer: {
    fontSize: 12,
    color: "#666",
    marginTop: 16,
  },
  wrapper: {
    width: "60%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
