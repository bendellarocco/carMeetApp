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

    return (
      <View style={styles.navbar}>
      <NavigationBar
        title={{title:'test'}}
        leftButton={leftButtonConfig} />
      <Text> HELLO WORLD </Text>
      </View>
    );

  }
});

var styles = StyleSheet.create ({
  content: {
    backgroundColor: 'white',
    flex: 4,
    padding: 0,
    marginTop: 0,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    flex: 1,
  },
});

module.exports = Profile;
