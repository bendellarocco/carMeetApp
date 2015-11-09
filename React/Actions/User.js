var alt = require('../alt');

class UserActions {
  doLogin(user) {
    this.dispatch(user);
  }
}

module.exports = alt.createActions(UserActions);
