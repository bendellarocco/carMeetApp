'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  Image,
  View
} = React;

var LoginButton = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>login</Text>
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
    color: '#D2915F',
    fontFamily: 'Avenir',
    fontWeight: '900',
    fontSize: 22
  }
});

module.exports = LoginButton;
