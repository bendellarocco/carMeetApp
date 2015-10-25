'use strict';

var React = require('react-native');

var {
  Text,
  StyleSheet,
  View,
  Dimensions,
} = React;

var {
  width,
  height,
} = Dimensions.get('window');

var Map = require('./map');

var Scrolling = require('./scrollView');

var Content = React.createClass ({

	render () {
		return (
			<View style={styles.content}>
        	<View style={styles.map}>
          		<Map />
        	</View>
        	<View style={styles.carousel}>
          		<Scrolling />
        	</View>
        	</View>
		);
	},
});

var styles = StyleSheet.create ({
  content: {
    backgroundColor: 'black',
    flex: 2,
    position: 'relative',
    padding: 0,
    margin: 3,
    marginTop: 0,
  },

  map: {
    flex: 1,
    width: (width / 2),
    position: 'absolute',
    left:1,
    padding: 1,
  },

  carousel: {
    flex: 1,
    width: (width / 2),
    position: 'absolute',
    right:1,
    padding: 1,
    margin: 2,
  },


});

module.exports = Content;