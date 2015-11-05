var React = require('react-native');
var Firebase = require('../firebase');
var alt = require('../alt');
var InstagramActions = require('../Actions/Instagram');
var {
  AsyncStorage
} = React;

var INSTAGRAM_KEY = '@InstagramStore';
var ref = Firebase.child('instagram');


class InstagramStore {
    constructor() {
    this.data = {
      id: '',
      image: '',
      likes: '',
    };

    this.bindListeners({
      handleLoad: InstagramActions.LOAD_EVENT
    });

    AsyncStorage.getItem(INSTAGRAM_KEY, function(err, data) {
      if (!err && data) {
        InstagramActions.loadEvent(JSON.parse(data));
      }
    });

    ref.on('value', (snapshot) => {
      var data = snapshot.val();
      InstagramActions.loadEvent(data);
      AsyncStorage.setItem(INSTAGRAM_KEY, JSON.stringify(data));
    }.bind(this));
  }

  handleLoad(data) {
    //console.log('handle load', data);
    this.data = data;
  }
}



InstagramStore.config = {
  getState: function(state) {
    return state.data;
  }
};

module.exports = alt.createStore(InstagramStore, 'InstagramStore');
