var alt = require('../alt');

class EventActions {
  loadEvent(data) {
    this.dispatch(data);
  }
}

module.exports = alt.createActions(EventActions);