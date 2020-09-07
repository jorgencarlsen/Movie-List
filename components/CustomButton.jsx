import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const CustomButton = ({ handlePress, value, text, changeValue }) => {


return (
  <>
    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => {
      handlePress(value);
      changeValue('');
    }}>
          <Text>{text}</Text>
    </TouchableOpacity>
  </>
);

};

const styles = StyleSheet.create({
  button: {
    elevation: 8,
    backgroundColor: "#AFDEDC",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'

  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default CustomButton;