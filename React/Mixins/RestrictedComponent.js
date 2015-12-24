'use strict';

var React = require('react-native');
var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
var FBLoginManager = require('NativeModules').FBLoginManager;
var LoginScene = require('../Components/Login');
var UserActions = require('../Actions/User');
var FacebookSource = require('../Sources/Facebook');
var SHA256 = require("crypto-js/sha256");

var {
  StyleSheet,
  Image,
  Modal,
  View
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    position: 'relative'
  }
});

module.exports = React.createClass({

  getInitialState: function() {
    return {
      subscriptions: [],
      loading: false,
      mounted: false
    };
  },

  componentWillMount: function(){
    var subscriptions = this.state.subscriptions;

    Object.keys(FBLoginManager.Events).forEach(function(event) {
      subscriptions.push(RCTDeviceEventEmitter.addListener(
        FBLoginManager.Events[event],
        function(eventData) {
          var eventHandler = this['on' + event];
          eventHandler && eventHandler(eventData);
        }.bind(this)
      ));
    }.bind(this));

    this.setState(Object.assign(this.state, {subscriptions : subscriptions}));
  },

  componentWillUnmount: function(){
    var subscriptions = this.state.subscriptions;

    subscriptions.forEach(function(subscription){
      subscription.remove();
    });
  },

  componentDidMount: function(){
    this.setState(Object.assign(this.state, {mounted: true}));

    FBLoginManager.getCredentials(function(err, data) {
      if (!err) {
        this.requestFacebookProfile(data).then((user) => {
          UserActions.didLogin(user);
        }).catch((err) => {
          console.error('requestFacebookProfile error', err);
        });
      }
    }.bind(this));
  },

  onLogin: function(data) {
    // console.log('login', data);
    // could set loading to true here then false inside bellow callback if we want a loading icon while logging in
    this.requestFacebookProfile(data).then((user) => {
      UserActions.didLogin(user);
    });
  },

  onLogout: function() {
    // console.log('logout');
  },

  onLoginNotFound: function() {
    // console.log('loginNotFound');
  },

  requestFacebookProfile(session) {
    return new Promise((resolve, reject) => {
      Promise.all([FacebookSource.basicInfo(session), FacebookSource.profilePhoto(session)]).then((data) => {
        var info = data[0];
        var photo = data[1];
        var userId = SHA256(info.email).toString();
        resolve(Object.assign(info, { photo, id: userId }));
      }).catch((err) => {
        console.error('FacebookSource error', err);
      });
    });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Modal
          animated={false}
          transparent={false}
          visible={this.props.user === null && this.state.mounted}>
          <LoginScene />
        </Modal>
        {this.props.children}
      </View>
    );
  }
});
