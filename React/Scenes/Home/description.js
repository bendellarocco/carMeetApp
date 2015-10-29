'use strict';

var React = require('react-native');

var {
  Text,
  StyleSheet,
  View,
  Dimensions,
} = React;

var Description = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
      	<Text style={styles.date}>{this.props.date}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({

	container: {
		backgroundColor: 'blue',
	},

});

module.exports = Description