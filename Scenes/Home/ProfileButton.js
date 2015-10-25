'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  Image,
  View
} = React;

var ProfileButton = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>profile</Text>
        <Image source={require('image!profile')} style={styles.icon} />
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
    backgroundColor: '#00A4C5',
    height: 40
  },
  icon: {
    backgroundColor: 'transparent',
    marginTop: -2,
    marginLeft: 10
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18
  }
});

module.exports = ProfileButton;