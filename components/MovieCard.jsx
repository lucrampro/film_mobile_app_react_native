import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const MovieCard = ({ img_path, title }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${img_path}`,
        }}
        />
        <Text style={styles.title}>{title ? title : 'Default title'  }</Text>
      {/* <Image uri={`https://image.tmdb.org/t/p/w500/${img_path}`} /> */}
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
    marginBottom: 10
  },
  title: {
    color: '#ffffff',
    width: 120
  }
})
export default MovieCard;