'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');

var {
  StyleSheet,
  Text,
  Image,
  View
} = React;

var ProfileButton = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
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
    backgroundColor: '#D2915F',
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
