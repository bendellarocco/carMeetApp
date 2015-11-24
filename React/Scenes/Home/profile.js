'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var ReactFireMixin = require('reactfire');
var _ = require('lodash');

var {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
} = React;

var {
  width,
  height,
} = Dimensions.get('window');


var Profile  = React.createClass({

  getInitialState: function(){

  },

  render: function() {
    return (


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
});

module.exports = Profile;
