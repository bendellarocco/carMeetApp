'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');

var {
  Text,
  StyleSheet,
  View,
  Dimensions,
} = React;

var Description = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    console.log('Scenes/Home/Description', 'render');
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
    	lineHeight: 27,
      textAlign: 'center'
	},

	text: {
		color: 'black',
    	fontFamily: 'Avenir',
    	fontSize: 12,
	}
});

module.exports = Description
