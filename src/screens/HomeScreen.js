import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
    <Text style={styles.text}>Pick Tourist Attraction</Text>
    <Button 
      color = "#8b0000"
      title = "Tourist Attraction 1"
      onPress ={() => props.navigation.navigate('GooglePlaces')}
    />
    <Button 
      colour = "#2196F3"
      title = "Tourist Attraction 2"
      onPress ={() => props.navigation.navigate('List')}
    />
    <Button 
      color = "#8b0000"
      title = "Tourist Attraction 3"
      onPress ={() => props.navigation.navigate('List')}
    />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: 20
  }
});

export default HomeScreen;
