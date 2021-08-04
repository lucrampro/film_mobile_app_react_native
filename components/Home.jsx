import React, {useState, useEffect} from 'react';
import { ScrollView,View, FlatList, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { RowCollectionMovies } from './'
import Network from '../network'
const Home = ({navigation}) => {

  const network = new Network();
  const [movieCollection, setmovieCollection] = useState([]);
  const [homeMovie, sethomeMovie] = useState([]);

  const goTohomeMovie = () => {
    navigation.navigate('Details', { movie_id: homeMovie.id, movie_title: homeMovie.title });
  }
  useEffect(() => {
    (async () => {
      let value = await network.getMoviesCollections();
      let home_movie_value = await network.getMovie('581726')
      sethomeMovie(home_movie_value)
      setmovieCollection(value);
      
    })()
  },[]);




  return (
    <ScrollView style={styles.wrapper}>
        
      <TouchableOpacity onPress={goTohomeMovie} style={styles.wrapper_home_img}>
        <Image
          style={styles.img}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${homeMovie.backdrop_path}`,
          }}
        />
        <Text style={styles.home_img_title}>{homeMovie.title}</Text>
      </TouchableOpacity>
      
      <FlatList
        style={styles.list}
        data={movieCollection}
        renderItem={({item}) => <RowCollectionMovies title={item.name} id_collection={item.id} navigation={navigation}></RowCollectionMovies>}
        keyExtractor={(item,i) => i.toString()}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#000000'
  },
  wrapper_home_img: {
    marginBottom: 5,
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20
  }, 
  img: {
    height: 200,
    width: '100%',
    position: 'absolute'
  },
  home_img_title: {
    color: '#ffffff',
    fontWeight: "bold",
    fontSize: 30,
    textTransform: 'uppercase'
  },
  list: {
    paddingLeft: 10
  }
})

export default Home;
