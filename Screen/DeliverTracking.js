import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import database from '@react-native-firebase/database';

function DeliveryTracking(props) {
  var {width, height} = Dimensions.get('window');
  let apikey = 'AIzaSyC85SGQeKy2psj2VdWbSxkYAX1UN2xQeR4';

  const [restaurant, setRestaurant] = useState(null);
  const [streetName, setStreetName] = useState('');
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [angle, setAngle] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [locationStatus, setLocationStatus] = useState('');

  console.log('Current Longitude', currentLongitude);
  console.log('Current Latitude', currentLatitude);




  const mapview = useRef();

  const calculateAngle = coordinates => {
    let startLat = coordinates[0]['latitude'];
    let startLng = coordinates[0]['longitude'];
    let endLat = coordinates[1]['latitude'];
    let endLng = coordinates[1]['longitude'];
    let dx = endLat - startLat;
    let dy = endLng - startLng;

    return (Math.atan2(dy, dx) * 180) / Math.PI;
  };

  // const zoomIn = () => {
  //   console.log('Zoom In');
  //   let newRegion = {
  //     latitude: region.latitude,
  //     longitude: region.longitude,
  //     latitudeDelta: region.latitudeDelta / 2,
  //     longitudeDelta: region.longitudeDelta / 2,
  //   };

  //   setRegion(newRegion);
  //   mapview.current.animateToRegion(newRegion, 200);
  // };

  // const zoomOut = () => {
  //   console.log('Zoom Out');
  //   let newRegion = {
  //     latitude: region.latitude,
  //     longitude: region.longitude,
  //     latitudeDelta: region.latitudeDelta * 2,
  //     longitudeDelta: region.longitudeDelta * 2,
  //   };

  //   setRegion(newRegion);
  //   mapview.current.animateToRegion(newRegion, 200);
  // };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted

          subscribeLocationLocation();
        } else {
          setLocationStatus('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };
  const firebasedatapost = () => {
    database()
  .ref('/user')
  .on('value', snapshot => {
    console.log('User data: ', snapshot.val().latitude);
    setCurrentLongitude(snapshot.val().longitude)
    setCurrentLatitude(snapshot.val().latitude)
  });


  }
  useEffect(() => {
    requestLocationPermission();

    firebasedatapost()
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      {/* renderMap */}

      <View style={{flex: 1}}>
        <MapView
          ref={mapview}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsMyLocationButton={false}
          zoomEnabled={true}
          initialRegion={region}
          style={{flex: 1, width: width, height: height}}>
          <MapViewDirections
            origin={{
              latitude: Number(currentLatitude),
              longitude: Number(currentLongitude),
            }}
            destination={{latitude: 31.4342, longitude: 74.3045}}
            apikey={apikey}
            strokeWidth={5}
            strokeColor={'#FC6D3F'}
            optimizeWaypoints={true}
            onReady={result => {
              setDuration(result.duration);
              if (!isReady) {
                //fit route into maps
                mapview.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: width / 20,
                    bottom: height / 4,
                    left: width / 20,
                    top: height / 8,
                  },
                });

                //Reposition the car
                let nextLoc = {
                  latitude: result.coordinates[0]['latitude'],
                  longitude: result.coordinates[0]['longitude'],
                };

                if (result.coordinates.length >= 2) {
                  let angle = calculateAngle(result.coordinates);
                  setAngle(angle);
                }
                setFromLocation(nextLoc);
                setIsReady(true);
              }
            }}
          />
          {/* destinationMarker */}
          <Marker coordinate={{latitude: 31.4342, longitude: 74.3045}}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FC6D3F',
                }}>
                <Image
                  source={require('../Assets/pin.png')}
                  style={{width: 25, height: 25, tintColor: 'white'}}
                />
              </View>
            </View>
          </Marker>
          {/* carIcon */}
          <Marker
        image={require('../Assets/ca1.png')}
            coordinate={{
              latitude: Number(currentLatitude),
              longitude: Number(currentLongitude),
            }}
            anchor={{x: 0.5, y: 0.5}}
            flat={true}
         
            rotation={angle}>
            {/* <Image
              source={require('../Assets/car.png')}
              style={{width: 40, height: 40,rotation:angle}}
            /> */}
          </Marker>
        </MapView>
      </View>

      {/* renderDestinationHeader */}

      <View
        style={{
          position: 'absolute',
          top: 50,
          left: 0,
          right: 0,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: width * 0.9,
            paddingVertical: 10,
            paddingHorizontal: 10 * 2,
            borderRadius: 30,
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../Assets/red-pin.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />

          <View style={{flex: 1}}>
            <Text>{streetName}</Text>
          </View>
          <Text>{Math.ceil(duration)} mins</Text>
        </View>
      </View>

      {/* //renderDeliveryInfo */}

      <View
        style={{
          position: 'absolute',
          bottom: 50,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: width * 0.9,
            paddingVertical: 10 * 3,
            paddingHorizontal: 10 * 2,
            borderRadius: 30,
            backgroundColor: 'white',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* Avatar */}
            <Image
              source={require('../Assets/red-pin.png')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />

            <View style={{flex: 1, marginLeft: 10}}>
              {/* Name & Rating */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Restaurant Name</Text>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../Assets/star.png')}
                    style={{
                      width: 18,
                      height: 18,
                      tintColor: '#FC6D3F',
                      marginRight: 10,
                    }}
                  />
                  <Text>4.5</Text>
                </View>
              </View>

              {/* Restaurant */}
              <Text style={{color: '#898C95'}}>{restaurant}</Text>
            </View>
          </View>

          {/* Buttons */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10 * 2,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 50,
                marginRight: 10,
                backgroundColor: '#FC6D3F',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text style={{color: 'white'}}>{currentLatitude}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                height: 50,
                backgroundColor: '#CDCDD2',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text style={{color: 'white'}}>{currentLongitude}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* //renderButton */}
{/* 
      <View
        style={{
          position: 'absolute',
          bottom: height * 0.35,
          right: 10 * 2,
          width: 60,
          height: 130,
          justifyContent: 'space-between',
        }}>
        Zoom In
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => zoomIn()}>
          <Text style={{fontSize: 25}}>+</Text>
        </TouchableOpacity>

        Zoom Out
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => zoomOut()}>
          <Text style={{fontSize: 30}}>-</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

export default DeliveryTracking;