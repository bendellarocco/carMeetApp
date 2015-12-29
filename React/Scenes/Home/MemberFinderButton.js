'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');

var {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
  Navigator
} = React;

var MapScene = require('../Map');

var MemberFinderButton = React.createClass({
  mixins: [PureRenderMixin],

  onMemberFinderPress: function () {
    this.props.navigator.push({component:MapScene});
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.onMemberFinderPress}>
          <Text style={styles.text}>Member Finder</Text>
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
    fontSize: 16
  }
});

module.exports = MemberFinderButton;