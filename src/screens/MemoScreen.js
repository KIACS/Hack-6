import React from "react";
import { Text, StyleSheet, View , FlatList} from "react-native";
import MemoComponent from "../components/MemoComponent.js";


const MemoScreen = () => {
    return (
        <View>
            <MemoComponent author = "Memo" address = {require("../DB/memo1.mp3")}/>
        </View>
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

export default MemoScreen;