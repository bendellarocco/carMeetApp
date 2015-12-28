'use strict';

var React = require('react-native');
var HomeScene = require('./Scenes/Home');
var RestrictedComponent = require('./Mixins/RestrictedComponent');
var UserStore = require('./Stores/User');
var Firebase = require('firebase');
var firebase = require('./firebase');

var {
  DeviceEventEmitter,
  AppRegistry,
  StyleSheet,
  Navigator,
  View
} = React;

var Meetups = React.createClass({
  getInitialState: function () {
    return {
      user: UserStore.getState(),
      route: {
        component: HomeScene
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
    console.log(this.state.user);
    var { RNLocation: Location } = require('NativeModules');

    Location.requestWhenInUseAuthorization();
    Location.startUpdatingLocation();
    Location.setDistanceFilter(5.0);

    var subscription = DeviceEventEmitter.addListener(
    'locationUpdated',
    (location) => {
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
        var obj = {
          speed: location.coords.speed,
          longitude: location.coords.longitude,
          latitude: location.coords.latitude,
          accuracy: location.coords.accuracy,
          heading: location.coords.heading,
          altitude: location.coords.altitude,
          altitudeAccuracy: location.coords.altitudeAccuracy,
        };
      //firebase.child('profiles').child(this.state.user.id).child('location').set(obj);
    },

);
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
