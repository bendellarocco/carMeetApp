'use strict';

var React = require('react-native');
var FacebookLoginButton = require('./FacebookLoginButton');
var LoginButton = require('./LoginButton');
var SignupButton = require('./SignupButton');
var Message = require('./Message');
var {
  StyleSheet,
  Image,
  View,
  Dimensions
} = React;

var {width} = Dimensions.get('window');

var LoginScene = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image source={require('image!login')} style={styles.backgroundImage}>
          <View style={styles.loginButtons}>
            <FacebookLoginButton {...this.props} />
            <Message />
            <View style={styles.loginContainer}>
              <LoginButton />
              <SignupButton />
            </View>
          </View>
        </Image>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    position: 'relative'
  },
  loginButtons: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width,
  },
  loginContainer: {
    flexDirection: 'row'
  }
});

module.exports = LoginScene;
