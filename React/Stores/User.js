var React = require('react-native');
var alt = require('../alt');
var UserActions = require('../Actions/User');
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

    // AsyncStorage.getItem(STORAGE_KEY, function(err, data) {
    //   if (!err && data) {
    //     UserActions.didLogin(JSON.parse(data));
    //   }
    // });
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
