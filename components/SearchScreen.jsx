import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { MovieRow } from './'
import Network from '../network'


const SearchScreen = ({navigation}) => {

  const network = new Network();
  const [searchMovieInfo, setsearchMovieInfo] = useState([]);
  
  const onUserSearch = async value => {
    let movies_infos = value.length > 0 ? await network.getMovieWithQuery(value) : []
    setsearchMovieInfo(movies_infos);
    console.log(navigation);
    
  }

  return (
    <View style={styles.wrapper}>
        <TextInput onChangeText={onUserSearch} style={styles.input} placeholder="Rechercher un film..."/>
        <FlatList
          data={searchMovieInfo}
          renderItem={({item}) =>  <MovieRow navigation={navigation} title={item.title} img_path={item.backdrop_path} movie_id={item.id} movie_title={item.title}/>}
          keyExtractor={(item,i) => i.toString()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20
  },

  input: {
    height: 30,
    backgroundColor: '#ffffff',
    padding: 5,
    marginBottom: 20
  }
})

export default SearchScreen;
