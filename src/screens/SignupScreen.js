import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View, Button } from "react-native";

const SignupScreen = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
    <View>
        <Text style={styles.text}>New Account</Text>
        <Text style={styles.subtext}>Username: </Text>
        <TextInput
          style={styles.input}
          onChangeText={username => setUsername(username)}
        />
        <Text style={styles.subtext}>Email: </Text>
        <TextInput
          style={styles.input}
          onChangeText={email => setEmail(email)}
        />
        <Text style={styles.subtext}>Password: </Text>
        <TextInput
          style={styles.input}
          onChangeText={password => setPassword(password)}
        />
        <Text style={styles.subtext}>Confirm Password: </Text>
        <TextInput
          style={styles.input}
          onChangeText={confirm => setConfirm(confirm)}
        />
        <Button 
          onPress ={() => props.navigation.navigate('Home')}
          title = "Register"
        />
    </View>
    );
};

const styles = StyleSheet.create({
    text: {
      fontSize: 50
    },
    subtext: {
      fontSize : 20
    },
    input: {
        height: 40,
        margin: 16,
        borderWidth: 3,
        padding: 10
    }
});

export default SignupScreen;