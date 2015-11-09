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
		backgroundColor: 'white',
		borderStyle: 'solid',
    borderColor: '#00A4C5',
	},

	date: {
		color: '#737373',
    	fontFamily: 'Avenir',
    	fontSize: 20,
    	fontWeight: "300",
    	textAlign: 'center',
    	lineHeight: 27,
	},

	text: {
		color: 'black',
    	fontFamily: 'Avenir',
    	fontSize: 12,
	}
});

module.exports = Description
