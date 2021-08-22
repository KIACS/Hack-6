import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
    <Text style={styles.text}>Pick Tourist Attraction</Text>
    <Button 
      onPress ={() => props.navigation.navigate('GooglePlaces')}
      title = "Tourist Attraction"
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
  }
});

export default HomeScreen;
