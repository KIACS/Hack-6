import React from "react";
import { Text, StyleSheet, View,Button } from "react-native";
import { Audio } from "expo-av";

const MemoComponent = (props) => {
    const [sound, setSound] = React.useState();
    //console.log(props);
    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(props.address);
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
    //console.log(props);
    return (<View>
    <Button title="Play Sound" onPress={playSound} />
    </View>
    );
};

const style = StyleSheet.create({});

export default MemoComponent;

