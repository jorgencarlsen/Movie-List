import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, TextInput, StyleSheet, View, Alert } from 'react-native';
import CustomButton from './CustomButton';

const SearchBar = ({handleSearch}) => {

  const [value, changeValue] = React.useState('Search');
  const [textColor, changeTextColor] = React.useState('gray');

  const onFocusChange = () => {
   // changeTextColor('black');
    changeValue('');
  }

  const onChangeText = (text) => {
    handleSearch(text);
    changeValue(text);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput]}
        onChangeText={text => onChangeText(text)}
        placeholder='Search'
        clearTextOnFocus={true}
        value={value}
        onFocus={onFocusChange}
      ></TextInput>
      <CustomButton
        handlePress={handleSearch}
        changeValue={changeValue}
        value={value}
        text='Search'
      />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
    //backgroundColor: 'lightblue'
  },
  textInput: {
    paddingLeft: 15,
    width: '75%',
    height: 32,
    borderWidth: .25,
    borderRadius: 25,
    backgroundColor: '#F0F7EE',
    color: 'black'
  }
});

export default SearchBar;