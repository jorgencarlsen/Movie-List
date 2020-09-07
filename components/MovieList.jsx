import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView  } from 'react-native';
import Movie from './Movie.jsx';

const MovieList = ({movies}) => {

return (
  <ScrollView style={{width: '100%'}}>
    <View style={styles.container}>
    {movies.length ? movies.map(movie => <Movie key={Math.random() * Date.now()} movie={movie} />) : <Text>There are no movies that match that movie title!</Text>}
    </View>
  </ScrollView>
);

};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    //backgroundColor: 'lightblue'
  }
});

export default MovieList;