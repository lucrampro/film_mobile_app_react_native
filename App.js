import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Axios from 'axios'


export default function App() {

  Axios('https://api.themoviedb.org/3/movie/12/lists?api_key=c79ee99246533da451af92bf868dc5b2&language=en-US&page=1')
  .then( response => {
    console.log(response.data.results);
    
  })

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
