'use strict';


var React = require('react-native');
var Firebase = require('firebase');
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
var RestrictedComponent = require('../../Mixins/RestrictedComponent');

var HomeScene = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      data: {}
    };
  },

  componentDidMount: function() {
    const ref = new Firebase('https://blazing-inferno-7802.firebaseio.com/event');

    ref.on('value', function(snapshot) {
      this.setState(Object.assign(this.state, {
        loading: false,
        data: snapshot.val()
      }));
    }.bind(this), function (errorObject) {

    });
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Banner />
        <Content />
      <View style={styles.navBar}>
        <CalendarButton />
        <ProfileButton />
      </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'White',
  },

  navBar: {
    flexDirection: 'row'
  },
});

module.exports = RestrictedComponent(HomeScene);
