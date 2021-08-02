import React, {useState, useEffect} from 'react';
import { View, FlatList, Text } from 'react-native';
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
    <View>
      <FlatList
        data={movieCollection}
        renderItem={({item}) => <RowCollectionMovies title={item.name}></RowCollectionMovies>}
        keyExtractor={(item,i) => i.toString()}
      />
    </View>
  );
}

export default Home;
