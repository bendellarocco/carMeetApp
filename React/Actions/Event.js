var alt = require('../alt');

class EventActions {
  constructor() {
    this.generateActions('didLoad');
  }
}

module.exports = alt.createActions(EventActions);
