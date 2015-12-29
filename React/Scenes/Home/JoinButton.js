'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var FBLoginManager = require('NativeModules').FBLoginManager;
var UserActions = require('../../Actions/User');
var UserStore = require('../../Stores/User');
// var EventAction = require('../../Actions/Event');

var Firebase = require('../../firebase');

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
      UserActions.didLogout();
    });

  },

  pressGoing: function() {
    // this.props.firebase.push({name: 'adam', age: 25});
    Firebase.child('event').child('going').child(UserStore.getState().id).once('value', function(snapshot) {
      var exists = (snapshot.val() !== null);
      if (exists == true) {
        Firebase.child('event').child('going').child(UserStore.getState().id).set({});
      }
      else {
        Firebase.child('event').child('going').child(UserStore.getState().id).set({going: true});
      }
      });

  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.container} onPress={this.pressGoing}>
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
