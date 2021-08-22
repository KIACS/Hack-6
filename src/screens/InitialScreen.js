import React from "react";
import { Text, StyleSheet, View, Button, Image} from "react-native";

const InitialScreen = (props) => {
  return (
    <View style={styles.screen}>
    <Text style={styles.text}>Welcome to Memo!</Text>
    <Image source = {require('../images/Logo.png')} />

    <View style={styles.button}>
    <Button 
      onPress ={() => props.navigation.navigate('Login')}
      title = "Login"
    />
    <Button 
      onPress ={() => props.navigation.navigate('Signup')}
      title = "Signup"
    />
    </View>

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    textAlign: "center",
    margin: 5
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: 50
  },
  button: {
    flexDirection: 'row'
  }
});

export default InitialScreen;
