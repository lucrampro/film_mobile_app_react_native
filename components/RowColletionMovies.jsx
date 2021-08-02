import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const RowColletionMovies = ({ title }) => {

  return (
    <View style={styles.row}>
      <Text style={styles.title}>{ title ? title : 'Default Title' }</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    borderColor: '#fff',
    borderWidth: 1,
  },
  title: {
    color: '#fff'
  }
})
export default RowColletionMovies;
