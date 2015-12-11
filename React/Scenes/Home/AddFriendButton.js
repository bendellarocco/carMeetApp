'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var NavigationBar = require('react-native-navbar');

var {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
} = React;

var Profile = require('./Profile');

var ProfileButton = React.createClass({
  mixins: [PureRenderMixin],

  onProfilePress: function () {
    console.log('pressed');
    this.props.navigator.push({component:Profile});
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.onProfilePress}>
          <Text style={styles.text}>Add Friend</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#00A4C5',
    height: 40
  },

  icon: {
    backgroundColor: 'transparent',
    marginTop: -2,
    marginRight: 10
  },

  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18
  }
});

module.exports = ProfileButton;
