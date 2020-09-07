import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


const NavBar = (props) => {


return (
  <View style={styles.navBar} zIndex={1}>
        <Text style={{fontSize: 24, marginLeft: 10}}>Movie List</Text>
  </View>
);

};

const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    paddingTop: 20,
    top: 0,
    height: '12%',
    width: '100%',
    backgroundColor: '#91A8A4',
    justifyContent: 'center',
    borderBottomWidth: .5
  }
});

export default NavBar;