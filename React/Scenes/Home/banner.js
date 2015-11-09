'use strict';

var React = require('react-native');
var {
  Image,
  Text,
  StyleSheet,
  View,
  Dimensions,
} = React;

var {
  width,
  height,
} = Dimensions.get('window');

var Banner = React.createClass({
	render() {
    return (
		  <View style={styles.mainImageContainer}>

        <Image
          style={styles.mainImage}
          source={{uri: this.props.image}}>
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
    height: (height * .25),
    backgroundColor: 'white',
    marginBottom: 0
  },
  mainImage: {
    height: (height * .25),
    width: width,
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
