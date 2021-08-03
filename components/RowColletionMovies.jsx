import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList  } from 'react-native';
import { MovieCard } from './'
import Network from '../network'

const RowColletionMovies = ({ title, id_collection , navigation}) => {
  const network = new Network();
  const [collectionMovie, setCollectionMovie] = useState([]);
  useEffect(() => {
    (async () => {
      let value = await network.getMoviesListsWithCollectionID(id_collection);
      setCollectionMovie(value);
    })()
  },[]);

  return (
    <View style={styles.row}>
      <Text style={styles.title}>{ title ? title : 'Default Title' }</Text>
      <FlatList
        horizontal={true}
        data={collectionMovie}
        renderItem={({item}) =>  <MovieCard img_path={item.backdrop_path} title={item.title} navigation={navigation} movie_id={item.id}/>}
        keyExtractor={(item,i) => i.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    marginBottom: 15,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    marginBottom: 10,
  }
})
export default RowColletionMovies;
