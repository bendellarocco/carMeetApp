'use strict';


var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Dimensions
} = React;
var Banner = require('./banner');
var Content = require('./content');
var ProfileButton = require('./ProfileButton')
var CalendarButton = require('./CalendarButton')
var Map = require('./Map');
var EventStore = require('../../Stores/Event');

var HomeScene = React.createClass({
  getInitialState() {
    return EventStore.getState();
  },

  componentDidMount() {
    EventStore.listen(this.onChange);
  },

  componentWillUnmount() {
    EventStore.unlisten(this.onChange);
  },

  onChange() {
    this.setState(this.getInitialState());
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Banner {...this.state} />
        <Map />
      <View style={styles.navBar}>
        <ProfileButton />
      </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'white',
  },

  navBar: {
    flexDirection: 'row',
  },

  scrollingBar: {
    backgroundColor: 'white',
  },

});

module.exports = HomeScene;
