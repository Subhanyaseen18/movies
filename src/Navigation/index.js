import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Questions from '../Screens/Main/Questions';
import Mood from '../Screens/Main/Mood';
import Movies from '../Screens/Main/Movies';
import MovieDetail from '../Screens/Main/MovieDetail';
const Stack = createStackNavigator();
const HomeStack = () => {
  return (
  <NavigationContainer>
      <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        gestureEnabled: true,
        animationEnabled: true,
        unmountOnBlur: true,
      })}>
      <Stack.Screen name="Questions" component={Questions} />
       <Stack.Screen name="Mood" component={Mood} />
       <Stack.Screen name="Movies" component={Movies} />
       <Stack.Screen name="MovieDetail" component={MovieDetail} />

    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default HomeStack;
