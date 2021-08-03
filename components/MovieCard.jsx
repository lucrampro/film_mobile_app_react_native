import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MovieCard = ({ img_path, title, navigation, movie_id }) => {

  const goToDetails = () => {
    navigation.navigate('Details', { movie_id: movie_id, movie_title: title });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToDetails} >
        <Image
          style={styles.img}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${img_path}`,
          }}
          />
          <Text style={styles.title}>{title ? title : 'Default title'  }</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  img: {
    width: 120,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    color: '#ffffff',
    width: 120,
    overflow: 'hidden',
    height: 20
  }
})
export default MovieCard;