var alt = require('../alt');

class UserActions {
  constructor() {
    this.generateActions('didLogout');
  }

  didLogin(user) {
    this.dispatch(user);


    // setTimeout(() => {
    //   this.actions.didLogout();
    // }, 5000);
  }
}

module.exports = alt.createActions(UserActions);
