var React = require('react-native');

var alt = require('../alt');
var Firebase = require('../firebase');

var EventActions = require('../Actions/Event');

var {
  AsyncStorage
} = React;

var STORAGE_KEY = '@EventStore';

class EventStore {
  constructor() {
    this.data = null;

    this.bindListeners({
      handleLoad: EventActions.DID_LOAD
    });

    AsyncStorage.getItem(STORAGE_KEY, function(err, data) {
      if (!err && data) {
        EventActions.didLoad(JSON.parse(data));
      }
    });

  }

  handleLoad(event) {
    this.data = event;

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
  }
}


EventStore.config = {
  getState: function(state) {
    return state.data;
  }
};

module.exports = alt.createStore(EventStore, 'EventStore');
