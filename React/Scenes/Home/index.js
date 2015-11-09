'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Dimensions
} = React;

var FirebaseModel = require('../../Mixins/FirebaseModel');
var Banner = require('./Banner');
var Content = require('./Content');
var JoinButton = require('./JoinButton')

var HomeScene = React.createClass({
  mixins: [
    FirebaseModel(require('../../firebase'), {
      event: 'event'
    })
  ],

  render: function() {
    if (!this.state.loaded) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Banner image={this.state.event.image} />
        <Content event={this.state.event} />
        <View style={styles.navBar}>
          <JoinButton />
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
  }
});

module.exports = HomeScene;
