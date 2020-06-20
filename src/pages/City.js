/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  SafeAreaView,
} from 'react-native';
import styles from '../style';
import axios from 'axios';
import {CityItem, SearchBar} from '../components';

const City = props => {
  const [originalCity, setoriginalCity] = useState([]);
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cityNum, setNum] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    let {data} = await axios.get('http://opentable.herokuapp.com/api/cities');
    setCity(data.cities);
    setoriginalCity(data.cities);
    setNum(data.count);
    setLoading(false);
  };

  const renderCity = ({item}) => {
    return <CityItem data={item} onCitySelect={() => citySelect(item)} />;
  };

  const searchCity = text => {
    let filteredCity = originalCity.filter(item => {
      const itemData = item.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setCity(filteredCity);
  };

  function citySelect(item) {
    props.navigation.navigate('Restaurants', {cityID: item});
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <SearchBar onSearch={searchCity} holder="Search city..." />
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#202040" />
        </View>
      ) : (
        <View>
          <View style={styles.city.cityNum}>
            <Text style={styles.city.cityNumText}>
              Total number of cities: {cityNum}
            </Text>
          </View>
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={city}
            renderItem={renderCity}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export {City};
