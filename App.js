import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { HomeScreen, Details, SearchScreen } from './components'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Root} options={{ headerShown: false }} />
           <Stack.Screen name="Details" component={Details} options={({ route }) => {
             return {
               title: route.params.movie_title,
               headerStyle: {
                backgroundColor: '#000000',
              },
               headerTintColor: '#fff',
               headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 22
              },
             }
           }} /> 
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function Root () {
  return(
    <Tab.Navigator
    
    screenOptions={{
      tabBarActiveTintColor: '#E50914',
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#000000'
      }
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarLabel: 'Recherche',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 25,
  },
});
