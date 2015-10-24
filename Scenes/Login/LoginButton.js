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
        <Image source={require('image!register')} style={styles.icon} />
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
    position: 'relative',
    backgroundColor: '#D2915F',
    height: 40
  },
  icon: {
    backgroundColor: 'transparent',
    marginTop: -8,
    marginRight: 10
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18
  }
});

module.exports = LoginButton;
