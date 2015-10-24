'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var Message = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Signup you know you want to.
        </Text>
        <Text style={styles.subText}>
          We will never spam you or sell information. Promise.
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 12
  },
  subText: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 8
  }
});

module.exports = Message;
