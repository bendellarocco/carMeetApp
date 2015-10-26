'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  Image,
  View
} = React;

var SignupButton = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>signup</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 70
  },
  text: {
    color: '#00A4C5',
    fontFamily: 'Avenir',
    fontWeight: '900',
    fontSize: 22
  }
});

module.exports = SignupButton;