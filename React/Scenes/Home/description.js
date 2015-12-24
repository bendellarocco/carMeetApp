'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');

var {
  Text,
  StyleSheet,
  View,
  Dimensions,
} = React;

var Map = require('./Map');

var {
  width,
  height,
} = Dimensions.get('window');

var Description = React.createClass({
  mixins: [PureRenderMixin],


  render: function() {
  console.log(width);
    return (
      <View style={styles.container}>
      	<Text style={styles.date}>{this.props.date}</Text>
        	<Text style={{fontFamily: 'Avenir', fontSize: 10}}>{JSON.stringify(this.props.user)}</Text>

        <View style={styles.map}>
          <Map></Map>
        </View>
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
    	fontWeight: "500",
    	lineHeight: 27,
      // textAlign: 'center'
	},

	text: {
		color: 'black',
    	fontFamily: 'Avenir',
    	fontSize: 12,
	},

  map: {
    width: (width * .4),
    height: (height * .22),
    position: 'absolute',
    right: 10,
    top: 30,

  },
});

module.exports = Description
