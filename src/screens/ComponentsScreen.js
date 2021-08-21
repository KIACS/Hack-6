import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    const name = "name";

    return <View>
        <Text style={styles.text}>react native component page</Text>
        <Text style={styles.subtext}>My name is {name}</Text>
      </View>
};

const styles = StyleSheet.create({
    text: {
      fontSize: 50
    },
    subtext : {
      fontSize : 20
    }
});

export default ComponentScreen;