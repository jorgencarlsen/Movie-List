import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import NavBar from './NavBar.jsx';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';


// const movieData = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

export default function App() {
  //Set State
  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState(movies);

  const handleSearch = (query) => {
   const matchingMovies = movies
    .filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));

   matchingMovies ? setFilteredMovies(matchingMovies) : setFilteredMovies([]);
  };

  const handleAddMovie = (movieTitle) => {
    const moviesCopy = [...movies];
    moviesCopy.push({title: movieTitle});
    console.log(moviesCopy);
    setMovies(moviesCopy);
    setFilteredMovies(moviesCopy);
  }

  return (
      <SafeAreaView style={styles.container}>
        <AddMovie handleAddMovie={handleAddMovie} />
        <SearchBar handleSearch={handleSearch} />
        {movies.length ? <MovieList movies={filteredMovies} /> : <Text>There are no movies in the database!</Text>}
        <StatusBar style="auto" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 85,
    //flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: 'green',
  }

});