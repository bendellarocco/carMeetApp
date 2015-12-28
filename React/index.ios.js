'use strict';

var React = require('react-native');
import isNull from 'lodash/lang/isNull';
var HomeScene = require('./Scenes/Home');
var MapScene = require('./Scenes/Home');
var RestrictedComponent = require('./Mixins/RestrictedComponent');
var UserStore = require('./Stores/User');
var Firebase = require('./firebase');
var GeoFire = require('geofire');
var { RNLocation: Location } = require('NativeModules');

var {
  DeviceEventEmitter,
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
} = React;

var obj ={
    longitude: 8,
    latitude: 10,
}

var geoFire = new GeoFire(Firebase.child('locations'));

Location.requestWhenInUseAuthorization();
Location.startUpdatingLocation();
Location.setDistanceFilter(5.0);

var subscription = DeviceEventEmitter.addListener(
  'locationUpdated',
  (location) => {
    console.log(location);
      /* Example location returned
      {
        coords: {
          speed: -1,
          longitude: -0.1337,
          latitude: 51.50998,
          accuracy: 5,
          heading: -1,
          altitude: 0,
          altitudeAccuracy: -1
        },
        timestamp: 1446007304457.029
      }
      */
      obj = {
        speed: location.coords.speed,
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        accuracy: location.coords.accuracy,
        heading: location.coords.heading,
        altitude: location.coords.altitude,
        altitudeAccuracy: location.coords.altitudeAccuracy,
      };
      if (!isNull(UserStore.getState())) {
        console.log('storing location as', obj);
        //geoFire.set(Firebase.child('profiles').child(UserStore.getState().id), [obj.latitude, obj.longitude])

        geoFire.set(UserStore.getState().id, [obj.latitude, obj.longitude]);
      }
  }
);

var Meetups = React.createClass({
  getInitialState: function () {
    return {
      user: UserStore.getState(),
      route: {
        component: MapScene
      }
    };
  },

  handleUserChange: function() {
    this.setState({ user: UserStore.getState() });
  },

  componentDidMount: function() {
    UserStore.listen(this.handleUserChange);
  },

  componentWillUnmount() {
    UserStore.unlisten(this.handleUserChange);
  },

  componentWillMount: function() {

  },

  render: function() {
    return (
      <RestrictedComponent user={this.state.user}>
        <View style={styles.container}>
          <Navigator
            initialRoute={this.state.route}
            renderScene={(route, navigator) => {
              return <route.component user={this.state.user} route={route} navigator={navigator} />;
            }} />
        </View>
      </RestrictedComponent>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('Meetups', () => Meetups);
// AppRegistry.registerComponent('Meetups', () => Meetups);
