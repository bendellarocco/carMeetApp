'use strict';

var React = require('react-native');
var {
  Image,
  Text,
  StyleSheet,
  View,
} = React;

var Banner = React.createClass({
	render() {
    return (
		  <View style={styles.mainImageContainer}>
        <Image
          style={styles.mainImage}
          source={require('image!banner')}>
        </Image>
        <Text style={styles.name}>
        </Text>
      </View>
    );
	},
});

var styles = StyleSheet.create({
  mainImageContainer: {
    alignItems: 'center',
    position: 'relative',
    height: 173,
    backgroundColor: 'white',
    marginBottom: 0
  },
  mainImage: {
    height: 173,
    width: 378,
    position: 'relative',
    top: 0
  },
  name: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    position: 'absolute',
    bottom: 0,
    left: 5,
    fontSize: 20,
    backgroundColor: 'transparent',
    fontWeight: '800'
  },

});

module.exports = Banner;