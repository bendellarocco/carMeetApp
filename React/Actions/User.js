var alt = require('../alt');
var Firebase = require('../firebase');

var ref = Firebase.child('event').child('going');

class UserActions {
  doLogin(user) {
    this.dispatch(user);
  }
}

module.exports = alt.createActions(UserActions);
