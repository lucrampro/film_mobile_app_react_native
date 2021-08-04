import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const MovieRow = ({title, img_path, navigation, movie_id, movie_title}) => {

  const goToDetails = () => {
    navigation.navigate('Details', { movie_id: movie_id, movie_title: title });
  }
  return (
    
      <TouchableOpacity onPress={goToDetails} style={styles.container} >
        <Image
          style={styles.img}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${img_path}`,
          }}
        />
        <Text style={styles.title}> {title} </Text>
      </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginRight: 20
  },
  title: {
    color: '#ffffff',
  }
})

export default MovieRow;
