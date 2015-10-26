'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var Scene = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: 'white'
  }
});

module.exports = Scene;
