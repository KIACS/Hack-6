import React from "react";
import { Text, StyleSheet, View , FlatList, Button} from "react-native";



const ListScreen = () => {
    // without keys rn deletes everything and rebuilds
    const friends = [
        // key has to be a string
        {name : 'Voice Memo #1', message : 'Message #1'},
        {name : 'Voice Memo #2', message : 'Message #2'},
        {name : 'Voice Memo #3', message : 'Message #3'},
    ];

    return (

        <View style={styles.screen}>
        <Text style={styles.text}>Attraction Locations</Text>

        <FlatList 
            keyExtractor = { friend => friend.name}
            data={friends}
            // how we want to show an item in a list
            renderItem = {({item}) => {
                return (<Button title = {item.name}/>);
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