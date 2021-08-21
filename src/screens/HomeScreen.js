import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
    <Text style={styles.text}>Memo HomeScreen</Text>
    <Button 
      onPress ={() => props.navigation.navigate('Component')}
      title = "go to component"
    />
    <TouchableOpacity onPress ={() => props.navigation.navigate('List')}>
      <Text>go to list demo</Text>
    </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
