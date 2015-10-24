'use strict';

var MEET_DATA = [
  {name: "Pre-Winter Mode Meet", date: "November 8th 2015", time: "4:00", banner: {main: ('http://farm9.staticflickr.com/8227/8531521317_a63d3e5f7c_b.jpg')}}
];

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
