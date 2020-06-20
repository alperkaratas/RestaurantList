/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ActivityIndicator, FlatList} from 'react-native';
import styles from '../style';
import axios from 'axios';
import {SearchBar, RestaurantListItem} from '../components';

const RestaurantList = props => {
  const [orjRestList, setOrjRest] = useState([]);
  const [restList, setRest] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRest();
  }, []);

  const fetchRest = async () => {
    setLoading(true);
    let {data} = await axios.get(
      `http://opentable.herokuapp.com/api/restaurants?city=${
        props.route.params.cityID
      }`,
    );
    setRest(data.restaurants);
    setOrjRest(data.restaurants);
    setLoading(false);
  };
  const renderRest = ({item}) => {
    return (
      <RestaurantListItem data={item} onRestSelect={() => restSelect(item)} />
    );
  };
  const searchRest = text => {
    let filteredRest = orjRestList.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setRest(filteredRest);
  };

  function restSelect(item) {
    props.navigation.navigate('RestaurantDetails', {restId: item.id});
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <SearchBar onSearch={searchRest} holder="Search restaurants..." />
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#202040" />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 25,
          }}>
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={restList}
            renderItem={renderRest}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  marginVertical: 5,
                  borderWidth: 0.5,
                  borderColor: '#fde2e2',
                }}
              />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export {RestaurantList};
