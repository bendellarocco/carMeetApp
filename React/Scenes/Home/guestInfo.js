'use strict';

var React = require('react-native');
var _ = require('lodash');
var UserStore = require('../../Stores/User');
var Firebase = require('firebase');

var {
  Image,
  Text,
  StyleSheet,
  View,
} = React;


var GuestInfo = React.createClass ({

getInitialState() {
    return {
      user:UserStore.getState()
    }
  },

  componentDidMount() {
    UserStore.listen(this.onChange);
  },

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  },

  onChange() {
    this.setState(this.getInitialState());
  },


	render: function () {
    var response = this.props.going;
    var keys = _.keys(response);
    var attending = keys.length;
    return (
			<View style={styles.guestArea}>
        <Text style={styles.date}>this is the guest info section yada yada yada</Text>
        <Text style={styles.date}>Going: {attending}</Text>
			</View>

		);
	},
});

var styles = StyleSheet.create({

	guestArea: {
		backgroundColor: 'white',
	},

	icon: {
    	height: 50,
    	width: 50,
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