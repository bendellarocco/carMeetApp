var React = require('react-native');
var Firebase = require('../firebase');
var alt = require('../alt');
var EventActions = require('../Actions/Event');
var {
  AsyncStorage
} = React;

var STORAGE_KEY = '@EventStore';

class EventStore {
  constructor() {
    this.data = {};

    this.bindListeners({
      handleLoad: EventActions.LOAD_EVENT
    });

    AsyncStorage.getItem(STORAGE_KEY, function(err, data) {
      if (!err && data) {
        EventActions.loadEvent(JSON.parse(data));
      }
    });

    var ref = Firebase.child('event');
    ref.on('value', function(snapshot) {
      var data = snapshot.val();
      EventActions.loadEvent(data);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }.bind(this));
  }

  handleLoad(data) {
    this.data = data;
  }
}


EventStore.config = {
  getState: function(state) {
    return state.data;
  }
};

module.exports = alt.createStore(EventStore, 'EventStore');