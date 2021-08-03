import React, {useState, useEffect} from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { RowCollectionMovies } from './'
import Network from '../network'
const Home = ({navigation}) => {

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
        renderItem={({item}) => <RowCollectionMovies title={item.name} id_collection={item.id} navigation={navigation}></RowCollectionMovies>}
        keyExtractor={(item,i) => i.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    backgroundColor: '#121212'
  }
})

export default Home;
