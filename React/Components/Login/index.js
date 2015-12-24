'use strict';

var React = require('react-native');
var FBLoginManager = require('NativeModules').FBLoginManager;
var {BlurView} = require('react-native-blur');
var FacebookLoginButton = require('./FacebookLoginButton');
var LoginButton = require('./LoginButton');
var SignupButton = require('./SignupButton');
var Message = require('./Message');
var {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Animated,
  Easing
} = React;

var {width} = Dimensions.get('window');

var LoginScene = React.createClass({
  getInitialState: function() {
    return {
      pan: new Animated.Value(0)
    }
  },

  componentWillMount: function(){

  },

  componentDidMount: function() {
    Animated.sequence([
      Animated.delay(500),
      Animated.timing(
        this.state.pan,
        {
          easing: Easing.elastic(1),
          toValue: 1
        }
      )
    ]).start();
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Image source={require('image!login')} style={styles.backgroundImage}>
          <Animated.View style={{
            flexDirection: 'column',
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: width,
            opacity: this.state.pan,
            transform: [{
             translateY: this.state.pan.interpolate({
               inputRange: [0, 1],
               outputRange: [150, 0]
             })
            }]
          }}>
            <FacebookLoginButton {...this.props} />
            <Message />
          </Animated.View>
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
  loginContainer: {
    flexDirection: 'row'
  }
});

module.exports = LoginScene;
