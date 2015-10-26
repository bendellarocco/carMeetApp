var alt = require('../alt');
var EventActions = require('../Actions/Event');

class EventStore {
  constructor() {
    this.data = {};

    this.bindListeners({
      handleLoad: EventActions.LOAD_EVENT
    });
  }

  handleLoad(data) {
    this.data = data;
  }
}

module.exports = alt.createStore(EventStore, 'EventStore');