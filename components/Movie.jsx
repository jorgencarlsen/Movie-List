import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


const Movie = ({movie}) => {



return (
  <View style={styles.container}>
    <Text style={styles.text}>{movie.title}</Text>
  </View>
);

};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    height: 70,
    paddingLeft: 15,
   // backgroundColor: 'lightgreen',
    borderWidth: .25,
    borderColor: 'gray'
  },
  text: {
    color: 'black'
  }
});

export default Movie;