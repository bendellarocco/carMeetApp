var alt = require('../alt');
var Firebase = require('../firebase');

class UserActions {
  constructor() {
    this.generateActions('didLogout');
  }

  didLogin(user) {
    Firebase.child('profiles').child(user.id).once('value', (snapshot) => {
      if (snapshot.exists()) {
        this.dispatch(snapshot.val());
      } else {
        snapshot.ref().set(user, () => {
          this.dispatch(user);
        });
      }
    });
  }
}

module.exports = alt.createActions(UserActions);
