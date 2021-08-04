import React, { useEffect, useState} from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import Network from '../network'

const Details = ({route}) => {
  const network = new Network;
  const movie_id = route.params.movie_id;
  const [movieInfos, setmovieInfos] = useState({});

  useEffect(() => {
    (async ()=> {
      let value = await network.getMovie(movie_id);
      
      setmovieInfos(value);
    })()    
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movieInfos.backdrop_path}`,
        }}
      />
      <ScrollView style={styles.wrapper}>
        <Text style={styles.title}>{movieInfos.title}</Text>
        <Text style={styles.description}>{movieInfos.overview}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1
  },
  img: {
    height: 300,
    resizeMode: 'cover'
  },
  wrapper: {
    padding: 15,
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25
  },
  description: {
    color: '#ffffff',
    lineHeight: 22,
  }
})

export default Details;
