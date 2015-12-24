'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');
// var NavigationBar = require('react-native-navbar');
var UserActions = require('../../Actions/User');
var FBLoginManager = require('NativeModules').FBLoginManager;
// var EventAction = require('../../Actions/Event');

var {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
  Navigator
} = React;

var MemberFinder = require('./MemberFinder');

var MemberFinderButton = React.createClass({
  mixins: [PureRenderMixin],

  onMemberFinderPress: function () {
    // this.props.firebase.push({name: 'adam', age: 25});
    FBLoginManager.logout(function(error, data){
      UserActions.didLogout();
    });
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
