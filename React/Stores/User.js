var React = require('react-native');
var alt = require('../alt');
var UserActions = require('../Actions/User');
var {
  AsyncStorage
} = React;

var STORAGE_KEY = '@UserStore';

class UserStore {
  constructor() {
    this.data = {
      authenticated: false,
      user: {}
    };

    this.bindListeners({
      handleLogin: UserActions.DO_LOGIN
    });

    AsyncStorage.getItem(STORAGE_KEY, function(err, data) {
      if (!err && data) {
        UserActions.handleLogin(JSON.parse(data));
      }
    });
  }

  handleLogin(user) {
    this.data = {
      authenticated: true,
      user: user
    };

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
  }
}


EventStore.config = {
  getState: function(state) {
    return state.data;
  }
};

module.exports = alt.createStore(UserStore, 'UserStore');
