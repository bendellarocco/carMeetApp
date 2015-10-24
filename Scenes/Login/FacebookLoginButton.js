'use strict';

var React = require('react-native');
var HomeScene = require('../Home');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
  Dimensions
} = React;

var {width, height} = Dimensions.get('window');

var FacebookLoginButton = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.container} onPress={() => {
          this.props.navigator.push({
            component: HomeScene,
          });
        }}>
          <View style={styles.container}>
            <Image source={require('image!facebook')} style={styles.icon} />
            <Text style={styles.text}>login with facebook</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#3C5A99',
    height: 40
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18
  },
  icon: {
    backgroundColor: 'transparent',
    marginTop: -8,
    marginRight: 10
  }
});

module.exports = FacebookLoginButton;
