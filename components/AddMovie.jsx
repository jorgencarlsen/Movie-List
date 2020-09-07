import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, TextInput, StyleSheet, View, Alert } from 'react-native';
import CustomButton from './CustomButton';

const AddMovie = ({handleAddMovie}) => {

  const [value, changeValue] = React.useState('Add Movie...');
  const [textColor, changeTextColor] = React.useState('gray');

  const onFocusChange = () => {
    changeTextColor('black');
    changeValue('');
  }

  const onChangeText = (text) => {
    changeValue(text);
  }

  return (
    <View style={styles.container}>
      <TextInput
        clearTextOnFocus={true}
        style={[styles.textInput, {color: textColor}]}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder='Add Movie...'
        onFocus={onFocusChange}
      ></TextInput>
      <CustomButton
        handlePress={handleAddMovie}
        value={value}
        changeValue={changeValue}
        text='Add Movie'
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
    marginBottom: 10,
    marginTop: 10
    //backgroundColor: 'lightblue'
  },
  textInput: {
    paddingLeft: 15,
    width: '68%',
    height: 32,
    borderWidth: .25,
    borderRadius: 25,
    backgroundColor: '#F0F7EE'
  }
});

export default AddMovie;