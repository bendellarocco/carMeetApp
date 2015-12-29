var React = require('react-native');
var alt = require('../alt');
var UserActions = require('../Actions/User');
var Firebase = require('../firebase');
var {
  AsyncStorage
} = React;

var STORAGE_KEY = '@UserStore';

class UserStore {
  constructor() {
    this.data = null;

    this.bindListeners({
      handleLogin: UserActions.DID_LOGIN,
      handleLogout: UserActions.DID_LOGOUT
    });

    AsyncStorage.getItem(STORAGE_KEY, (err, data) => {
      if (!err && data) {
        this.handleLogin(JSON.parse(data));
      }
    });

  }

  handleLogin(user) {
    this.data = user;

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
  }

  handleLogout() {
    this.data = null;

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
  }
}


UserStore.config = {
  getState: function(state) {
    return state.data;
  }
};

module.exports = alt.createStore(UserStore, 'UserStore');
