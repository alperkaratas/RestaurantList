import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../style';

const CityItem = props => {
  return (
    <TouchableOpacity
      style={styles.city.container}
      onPress={props.onCitySelect}>
      <View style={styles.city.itemContainer}>
        <Text style={styles.city.text}>{props.data}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {CityItem};
