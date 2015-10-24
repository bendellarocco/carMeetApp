'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Dimensions
} = React;

var HomeScene = React.createClass({
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
    flex: 1
  }
});

module.exports = HomeScene;
