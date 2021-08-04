import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const MovieRow = () => {
  return (
    <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${'wwemzKWzjKYJFfCeiB57q3r4Bcm.png'}`,
          }}
        />
        <Text style={styles.title}>Test </Text>
    </View>
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
