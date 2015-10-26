'use strict';


var React = require('react-native');
var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
var FBLoginManager = require('NativeModules').FBLoginManager;
var LoginScene = require('../Components/Login');
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

module.exports = function (Component) {
  var AuthComponent = React.createClass({
    getInitialState: function() {
      return {
        subscriptions: [],
        loading: true,
        user: null
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
      FBLoginManager.getCredentials(function(err, data) {
        if (!err) {
          this.setState(Object.assign(this.state, {user: data, loading: false}));
        } else {
          this.setState(Object.assign(this.state, {loading: false, user: null}));
        }
      }.bind(this));
    },

    onLogin: function(data) {
      //console.log('login', data);
      this.setState(Object.assign(this.state, {user: data}));
    },

    onLogout: function() {
      //console.log('logout');
      this.setState(Object.assign(this.state, {user: null}));
    },

    onLoginFound: function(data) {
      //console.log('loginFound', data);
      this.setState(Object.assign(this.state, {user: data}));
    },

    onLoginNotFound: function() {
      //console.log('loginNotFound');
      this.setState(Object.assign(this.state, {user: null}));
    },

    onError: function(data) {
      //console.log('loginError');
    },

    onCancel: function() {
      //console.log('loginCancel');
    },

    onPermissionsMissing: function() {
      //console.log('loginPermissionsMissing');
    },

    render: function() {
      return (
        <View style={styles.container}>
          <Modal
            animated={true}
            transparent={true}
            visible={this.state.user === null && !this.state.loading}>
            <LoginScene />
          </Modal>
          <Component {...this.props} user={this.state.user} />
        </View>
      );
    }
  });

  return AuthComponent;
};

