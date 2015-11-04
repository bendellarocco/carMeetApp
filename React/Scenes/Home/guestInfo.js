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
      <View style={styles.go}>
        <Text style={styles.attending}>{attending}</Text>
        <Text style={styles.going}>going</Text>
      </View>
        <Text style={styles.vAll}>view all</Text>
			</View>

		);
	},
});

var styles = StyleSheet.create({

	guestArea: {
		backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
	},

  	going: {
      flex: 2,
    	color: '#ABABAB',
    	fontFamily: 'Avenir',
    	fontSize: 14,
    	marginLeft: 26,
    	fontWeight: '700',
  },

    attending: {
      flex:2,
      color: '#ABABAB',
      fontFamily: 'Avenir',
      fontSize: 32,
      marginLeft: 26,
      fontWeight: '800',
      
  },

    vAll: {
      flex:1,
      fontSize: 14,
      marginRight: 26,
      fontWeight: '700',
      textAlign: 'right',
      color: '#ABABAB',
      fontFamily: 'Avenir',
  },

  go: {
    textAlign: 'left',

  },


});

module.exports = GuestInfo