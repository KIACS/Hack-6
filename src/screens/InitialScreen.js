import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity} from "react-native";

const InitialScreen = (props) => {
  return (
    <View>
    <Text style={styles.text}>Welcome to Voice Memo!</Text>
    <Button 
      onPress ={() => props.navigation.navigate('Login')}
      title = "Login"
    />
    <Button 
      onPress ={() => props.navigation.navigate('Signup')}
      title = "Signup"
    />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    textAlign: "center",
    margin: 5
  }
});

export default InitialScreen;
