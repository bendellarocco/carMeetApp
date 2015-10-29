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
          {this.props.title}
        </Text>
      </View>
    );
	},
});

var styles = StyleSheet.create({
  mainImageContainer: {
    alignItems: 'center',
    position: 'relative',
    height: 135,
    backgroundColor: 'white',
    marginBottom: 0
  },
  mainImage: {
    height: 135,
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
    backgroundColor: 'transparent'
  },
  date: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 14,
    position: 'absolute',
    bottom: 3,
    right: 5,
    backgroundColor: 'transparent'
  }
});

module.exports = Banner;