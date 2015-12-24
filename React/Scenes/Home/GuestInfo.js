'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var _ = require('lodash');

var {
  Image,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Animated,
} = React;

var {
  width,
  height,
} = Dimensions.get('window');

var UserStore = require('../../Stores/User');

var GuestInfo = React.createClass ({
  mixins: [PureRenderMixin],

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
    borderStyle: 'solid',
    borderColor: '#D8D8D8 ',
    borderTopWidth: 1,
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
    // textAlign: 'right',
    color: '#ABABAB',
    fontFamily: 'Avenir',
  },

  go: {
    // textAlign: 'left',
  }
});

module.exports = GuestInfo
