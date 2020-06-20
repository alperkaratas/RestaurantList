/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {City, RestDetails, RestaurantList} from './pages';

const Stack = createStackNavigator();

function CityLogo() {
  return (
    <Image
      style={{width: 35, height: 35}}
      source={require('../src/assets/buildings.png')}
    />
  );
}
function RestLogo() {
  return (
    <Image
      style={{width: 35, height: 35}}
      source={require('../src/assets/food.png')}
    />
  );
}

function RestDetailLogo() {
  return (
    <Image
      style={{width: 35, height: 35}}
      source={require('../src/assets/team.png')}
    />
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cities">
        <Stack.Screen
          name="Cities"
          component={City}
          options={{headerTitle: props => <CityLogo {...props} />}}
        />
        <Stack.Screen
          name="Restaurants"
          component={RestaurantList}
          options={{headerTitle: props => <RestLogo {...props} />}}
        />
        <Stack.Screen
          name="RestaurantDetails"
          component={RestDetails}
          options={{headerTitle: props => <RestDetailLogo {...props} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
