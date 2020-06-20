import React from 'react';
import {View, Image, TextInput} from 'react-native';
import styles from '../style';

const SearchBar = props => {
  return (
    <View style={styles.searchBar.container}>
      <Image
        style={{width: 20, height: 20, alignSelf: 'center', marginLeft: 15}}
        source={require('../assets/search.png')}
      />
      <TextInput
        style={styles.searchBar.textInputStyle}
        onChangeText={props.onSearch}
        placeholder={props.holder}
        placeholderTextColor="gray"
      />
    </View>
  );
};

export {SearchBar};
