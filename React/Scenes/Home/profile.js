'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var ReactFireMixin = require('reactfire');
var _ = require('lodash');
var NavigationBar = require('react-native-navbar');

var {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  StatusBarIOS,
} = React;

var HomeScene = require('./index');

var {
  width,
  height,
} = Dimensions.get('window');


var Profile  = React.createClass({
  mixins: [PureRenderMixin, ReactFireMixin],

  render: function() {

  const leftButtonConfig = {
    title: 'Home',
    handler: () => this.props.navigator.pop({component:HomeScene}),
  };

  const statusBarConfig = {
    showAnimation: 'none',
    hideAnimation: 'none',
    style: 'light-content',
  };

    return (
      <View style={styles.content}>
      <NavigationBar
        title={{title:'Profile'}}
        leftButton={leftButtonConfig}
        style={styles.navbar}/>
      <Text>USERNAME</Text>
      </View>
    );

  }
});

var styles = StyleSheet.create ({
  content: {
    backgroundColor: 'white',
    flex: 1,
  },
  navbar: {
    flex: 1,
  },
  profile: {
    flex: 3,
  },

  info: {

  },

  profilePic: {

  },
});

module.exports = Profile;
