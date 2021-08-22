import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
    <Text style={styles.text}>Pick Tourist Attraction</Text>
    <Button 
      onPress ={() => props.navigation.navigate('List')}
      title = "Tourist Attraction 1"
    />
    <Button 
      onPress ={() => props.navigation.navigate('List')}
      title = "Tourist Attraction 2"
    />
       <Button 
      onPress ={() => props.navigation.navigate('List')}
      title = "Tourist Attraction 3"
    />
{/*     <TouchableOpacity onPress ={() => props.navigation.navigate('List')}>
      <Text>go to list demo</Text>
    </TouchableOpacity> */}
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
