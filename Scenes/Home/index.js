'use strict';

var MEET_DATA = [
  {name: "Pre-Winter Mode Meet", date: "November 8th 2015", time: "4:00", banner: {main: ('http://farm9.staticflickr.com/8227/8531521317_a63d3e5f7c_b.jpg')}}
];

var React = require('react-native');
var Firebase = require('firebase');
var {
  StyleSheet,
  Text,
  View,
  Dimensions
} = React;

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
        {this.state.loading ? <Text>... loading</Text> : <Text>Our next meet is {this.state.data.date}</Text>}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  }
});

module.exports = HomeScene;
