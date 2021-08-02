import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Network from '../network'

const RowColletionMovies = ({ title, id_collection }) => {
  const network = new Network();
  const [collectionMovie, setCollectionMovie] = useState([]);
  useEffect(() => {
    (async () => {
      let value = await network.getMoviesListsWithCollectionID(id_collection);
      setCollectionMovie(value);
    })()
  });

  return (
    <View style={styles.row}>
      <Text style={styles.title}>{ title ? title : 'Default Title' }</Text>
      <FlatList
        horizontal={true}
        data={collectionMovie}
        renderItem={({item}) => <Text style={styles.title}> {item.title}</Text>}
        keyExtractor={(item,i) => i.toString()}
      />
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
