var alt = require('../alt');
var Firebase = require('../firebase');

var ref = Firebase.child('event').child('going');

class EventActions {
  loadEvent(data) {
    this.dispatch(data);
  }

  addGoing(user) {
    ref.push(user);
  }
}

module.exports = alt.createActions(EventActions);
