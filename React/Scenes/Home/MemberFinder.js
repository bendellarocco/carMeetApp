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
  StatusBarIOS,
} = React;

var Firebase = require('../../firebase');
var AddFriend = require('./AddFriendButton');
var HomeScene = require('./index');

var {
  width,
  height,
} = Dimensions.get('window');


var MemberFinder  = React.createClass({
  mixins: [PureRenderMixin, ReactFireMixin],

  componentWillMount: function() {
    this.bindAsObject(Firebase.child('event'), 'event');
  },

  render: function() {

  const leftButtonConfig = {
    title: '<',
    tintColor: 'white',
    handler: () => this.props.navigator.pop({component:HomeScene}),
  };

  const titleConfig = {
    title: 'Member Finder',
    tintColor: 'white',
  };

  if (_.isNull(this.state) || _.isUndefined(this.state.event)) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    }

    return (
      <View style={styles.content}>
      <NavigationBar
        statusBar={{style: 'light-content', hideAnimation: 'none', showAnimation: 'none', hidden: false}}
        title={titleConfig}
        leftButton={leftButtonConfig}
        tintColor={'#00A4C5'}
        style={styles.navbar}/>
      <Text>Member Finder</Text>

      </View>
    );

  }
});

var styles = StyleSheet.create ({
  content: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },

  navbar: {
    flex: 1,
    width: width,
    marginTop: -10,
  },
});

module.exports = MemberFinder;
