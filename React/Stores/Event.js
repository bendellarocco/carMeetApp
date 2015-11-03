var React = require('react-native');
var Firebase = require('../firebase');
var alt = require('../alt');
var EventActions = require('../Actions/Event');
var {
  AsyncStorage
} = React;

var STORAGE_KEY = '@EventStore';
var ref = Firebase.child('event');

class EventStore {
  constructor() {
    this.data = {
      title: '',
      date: ''
    };

    this.bindListeners({
      handleLoad: EventActions.LOAD_EVENT
    });

    AsyncStorage.getItem(STORAGE_KEY, function(err, data) {
      if (!err && data) {
        EventActions.loadEvent(JSON.parse(data));
      }
    });

    ref.on('value', (snapshot) => {
      var data = snapshot.val();
      EventActions.loadEvent(data);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }.bind(this));
  }

  handleLoad(data) {
    console.log('handle load', data);
    this.data = data;
  }
}


EventStore.config = {
  getState: function(state) {
    return state.data;
  }
};

module.exports = alt.createStore(EventStore, 'EventStore');
