var alt = require('../alt');

class InstagramActions {

  loadEvent(data) {
  	this.dispatch(data);
  }
}

module.exports = alt.createActions(InstagramActions);