/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  Text,
  Linking,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from '../style';
import axios from 'axios';

const RestDetails = props => {
  const [restDetails, setRestDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRestDetails();
  }, []);

  const fetchRestDetails = async () => {
    setLoading(true);
    let {data} = await axios.get(
      `https://opentable.herokuapp.com/api/restaurants/${
        props.route.params.restId
      }`,
    );
    setRestDetails(data);
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.restaurantDetail.container}>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#202040" />
        </View>
      ) : (
        <View style={{}}>
          <Image
            style={{
              width: Dimensions.get('window').width / 1.2,
              height: Dimensions.get('window').height / 3,
              alignSelf: 'center',
            }}
            source={{uri: restDetails.image_url}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <View style={styles.restaurantDetail.dot} />
            <Text style={styles.restaurantDetail.headerStyle}>
              {restDetails.name}
            </Text>
          </View>
          <View style={styles.restaurantDetail.areaNameStyle}>
            <Image
              style={{width: 35, height: 35, alignItems: 'center'}}
              source={require('../assets/location.png')}
            />
            <Text style={styles.restaurantDetail.areaNameTextStyle}>
              {restDetails.area}
            </Text>
          </View>
          <View style={styles.restaurantDetail.addressNameStyle}>
            <Image
              style={{width: 35, height: 35, alignItems: 'center'}}
              source={require('../assets/address.png')}
            />
            <Text style={styles.restaurantDetail.adressNameTextStyle}>
              {restDetails.address}
            </Text>
          </View>
          <View style={styles.restaurantDetail.phoneStyle}>
            <Image
              style={{width: 30, height: 30, alignItems: 'center'}}
              source={require('../assets/phone.png')}
            />
            <Text style={styles.restaurantDetail.phoneTextStyle}>
              {restDetails.phone}
            </Text>
          </View>

          <View style={styles.rezervation.container}>
            <TouchableOpacity
              onPress={() => Linking.openURL(restDetails.mobile_reserve_url)}>
              <Text style={styles.rezervation.textStyle}>
                Rezervasyon Yaptır
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export {RestDetails};
