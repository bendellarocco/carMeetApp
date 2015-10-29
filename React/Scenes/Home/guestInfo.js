'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  StyleSheet,
  View,
} = React;


var GuestInfo = React.createClass ({

	render () {
		return (
			<View style={styles.guestArea}>
        <Text style={styles.date}>this is the guest info section yada yada yada</Text>
			</View>

		);
	},
});

var styles = StyleSheet.create({

	guestArea: {
		backgroundColor: 'white',
	},

	icon: {
    	height: 16,
    	width: 16,
    	position: 'absolute',
    	right: 6,
    	top: 0,
    	marginTop: 3,
  	},

  	date: {
    	color: '#ABABAB',
    	fontFamily: 'Avenir',
    	fontSize: 12,
    	marginRight: 26,
    	marginTop: 3,
    	fontWeight: '700',
    	textAlign: 'right',
  },


});

module.exports = GuestInfo