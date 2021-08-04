import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { MovieRow } from './'
import Network from '../network'


const SearchScreen = () => {

  const network = new Network();

  return (
    <View style={styles.wrapper}>
        <TextInput style={styles.input} placeholder="Rechercher un film..."/>
        <MovieRow/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20
  },

  input: {
    height: 30,
    backgroundColor: '#ffffff',
    padding: 5,
  }
})

export default SearchScreen;
