import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../style';

const RestaurantListItem = props => {
  return (
    <TouchableOpacity
      style={styles.restaurantList.container}
      onPress={props.onRestSelect}>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.restaurantList.restaurantListItemTitle}>
          {props.data.name}
        </Text>

        <View
          style={{flexDirection: 'row', marginTop: 12, alignSelf: 'center'}}>
          <Image
            style={{width: 30, height: 30, marginRight: 10}}
            source={require('../assets/location.png')}
          />
          <Text style={styles.restaurantList.restaurantListItemArea}>
            {props.data.area}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {RestaurantListItem};
