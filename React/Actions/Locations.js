var alt = require('../alt');

class LocationActions {
  constructor() {
    this.generateActions('didLoad');
  }
}

module.exports = alt.createActions(LocationActions);
