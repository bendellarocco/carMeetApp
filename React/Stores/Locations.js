var React = require('react-native');
var GeoFire = require('geofire');

var alt = require('../alt');
var firebase = require('../firebase');

var LocationsActions = require('../Actions/Locations');

var {
  AsyncStorage
} = React;

var STORAGE_KEY = '@LocationsStore';


class LocationsStore {
  constructor() {
    this.data = [];


    this.bindListeners({
      handleLoad: LocationsActions.DID_LOAD
    });

    AsyncStorage.getItem(STORAGE_KEY, function(err, data) {
      if (!err && data) {
        LocationsActions.didLoad(JSON.parse(data));
      }
    });

  }

  handleLoad(locations) {
    this.data = locations;

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
  }

  // handleLogin(user) {
  //   this.data = user;
  //
  //   AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
  // }
  //
  // handleLogout() {
  //   this.data = null;
  //
  //   AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
  // }
}

LocationsStore.config = {
  getState: function(state) {
    return state.data;
  }
};

module.exports = alt.createStore(LocationsStore, 'LocationsStore');
