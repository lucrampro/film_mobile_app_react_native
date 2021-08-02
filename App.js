import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { RowCollectionMovies } from './components'
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
        <RowCollectionMovies></RowCollectionMovies>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
