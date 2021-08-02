import React, {useState, useEffect} from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { RowCollectionMovies } from './'
import Network from '../network'
const Home = () => {

  const network = new Network();
  const [movieCollection, setmovieCollection] = useState([]);
  
  
  useEffect(() => {
    (async () => {
      let value = await network.getMoviesCollections();
      setmovieCollection(value);
    })()
    
  },[]);


  return (
    <View style={styles.wrapper}>
      <FlatList
        data={movieCollection}
        renderItem={({item}) => <RowCollectionMovies title={item.name} id_collection={item.id}></RowCollectionMovies>}
        keyExtractor={(item,i) => i.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})

export default Home;
