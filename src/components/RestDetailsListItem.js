import React from 'react';
import {View, Text} from 'react-native';

const RestDetailsListItem = props => {
  console.log('PROPS');
  console.log(props);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>{props.data.name}</Text>
      <Text>{props.data.phone}</Text>
    </View>
  );
};

export {RestDetailsListItem};
