import React from "react";
import { Text, StyleSheet, View , FlatList} from "react-native";



const ListScreen = () => {
    // without keys rn deletes everything and rebuilds
    const friends = [
        // key has to be a string
        {name : 'Memo #1', message : 'message #1'},
        {name : 'Memo #2', message : 'message #2'},
        {name : 'Memo #3', message : 'message #3'},
    ];

    return (
        <FlatList 
            keyExtractor = { friend => friend.name}
            data={friends}
            // how we want to show an item in a list
            renderItem = {({item}) => {
                return <Text style = {styles.textStyle}>{item.name}  {item.message}</Text>;
            }}
        />
        );
};



const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20,
      marginVertical: 10
    },
    subtext : {
      fontSize : 20
    }
});

export default ListScreen;