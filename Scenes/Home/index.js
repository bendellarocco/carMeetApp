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
        <Banner></Banner>
        <Content></Content>
      </View>
    );
  }
});

var styles = StyleSheet.create({
    container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: 'Black',
  },
});

module.exports = HomeScene;
