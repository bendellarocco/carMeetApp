'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var FBLoginManager = require('NativeModules').FBLoginManager;
// var EventAction = require('../../Actions/Event');

var {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableWithoutFeedback
} = React;

var JoinButton = React.createClass({
  mixins: [PureRenderMixin],

  handleGoing: function() {
    // this.props.firebase.push({name: 'adam', age: 25});
    FBLoginManager.logout(function(error, data){

    });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.container} onPress={this.handleGoing}>
          <View style={styles.container}>
            <Text style={styles.text}>Join</Text>
          </View>
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
    backgroundColor: '#D2915F',
    height: 40
  },

  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 16
  }
});

module.exports = JoinButton;
