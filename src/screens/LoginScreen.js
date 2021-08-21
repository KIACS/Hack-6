import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View, Button } from "react-native";

const LoginScreen = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
    <View>
        <Text style={styles.text}>Login</Text>
        <Text style={styles.subtext}>Username: </Text>
        <TextInput
          style={styles.input}
          onChangeText={username => setUsername(username)}
        />
        <Text style={styles.subtext}>Password: </Text>
        <TextInput
          style={styles.input}
          onChangeText={password => setPassword(password)}
        />
        <Button 
          onPress ={() => props.navigation.navigate('Home')}
          title = "Login"
        />
    </View>
    );
};

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      textAlign: "center"
    },
    subtext: {
      fontSize : 20,
      margin: 5
    },
    input: {
        height: 40,
        margin: 16,
        borderWidth: 3
    }
});

export default LoginScreen;