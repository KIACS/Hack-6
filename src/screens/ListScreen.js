import React from "react";
import { Text, StyleSheet, View , FlatList, Button} from "react-native";



const ListScreen = () => {
    // without keys rn deletes everything and rebuilds
    const friends = [
        // key has to be a string
        {name : 'Voice Memo #1', colour : '#2196F3'},
        {name : 'Voice Memo #2', colour : '#8b0000'},
        {name : 'Voice Memo #3', colour : '#2196F3'},
    ];

    return (

        <View style={styles.screen}>
        <Text style={styles.text}>Attraction Locations</Text>

        <FlatList 
            keyExtractor = { friend => friend.name}
            data={friends}
            // how we want to show an item in a list
            renderItem = {({item}) => {
                return (<Button color = {item.colour} title = {item.name}/>);
            }}
        />

        </View>
    );
};



const styles = StyleSheet.create({
    text: {
      fontSize: 30
    },
    subtext : {
      fontSize : 20
    },
    screen: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: 20
    }
});

export default ListScreen;