'use strict';

var React = require('react-native');
var update = require('react-addons-update');
var isNull = require('lodash/lang/isNull');
var findIndex = require('lodash/array/findIndex');
var GeoFire = require('geofire');

var locations = [];

var Firebase = require('./firebase');

var HomeScene = require('./Scenes/Home');
var MapScene = require('./Scenes/Map');
var RestrictedComponent = require('./Mixins/RestrictedComponent');
var UserStore = require('./Stores/User');
var EventStore = require('./Stores/Event');
var LocationsStore = require('./Stores/Locations');
var LocationsActions = require('./Actions/Locations');

var { RNLocation: Location } = require('NativeModules');

var {
  DeviceEventEmitter,
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
} = React;

var geoFire = new GeoFire(Firebase.child('locations'));

Location.requestWhenInUseAuthorization();
Location.startUpdatingLocation();
Location.setDistanceFilter(5.0);

var subscription = DeviceEventEmitter.addListener(
  'locationUpdated',
  (location) => {
    console.log('location update', location);
    var obj = {
      speed: location.coords.speed,
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
      accuracy: location.coords.accuracy,
      heading: location.coords.heading,
      altitude: location.coords.altitude,
      altitudeAccuracy: location.coords.altitudeAccuracy,
    };

    if (!isNull(UserStore.getState())) {
      console.log('setting user store state');
      geoFire.set(UserStore.getState().id, [obj.latitude, obj.longitude]);
    }
  }
);

EventStore.listen((event) => {
  var geoQuery = geoFire.query({
    center: [event.data.lat, event.data.long],
    radius: 10.5
  });

  geoQuery.on('key_entered', function(id, location) {
    locations = update(locations, {
      $push: [{
        id, location
      }]
    });
    // console.log('locations', location);
  });

  geoQuery.on('key_moved', function(id, location) {
    var index = findIndex(locations, {id});
    locations = update(locations, {
      $splice: [[index, 1, update(locations[index], {
        location: {
          $set: location
        }
      })]]
    });
    // console.log('locations', location);
  });

  geoQuery.on('key_moved', function(id, location) {
    var index = findIndex(locations, {id});
    locations = update(locations, {
      $splice: [[index, 1, update(locations[index], {
        location: {
          $set: location
        }
      })]]
    });
    // console.log('locations', location);
  });

  geoQuery.on('key_exited', function(id, location) {
    var index = findIndex(locations, {id});
    locations = update(locations, {
      $splice: [[index, 1]]
    });
    // console.log('locations', location);
  });
});

// LocationsStore.listen((locations) => {
//   console.log('got some more locations', locations);
// });

setInterval(function() {
  //console.log('trying to set locations to', locations);
  LocationsActions.didLoad(locations);
}, 100);

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
