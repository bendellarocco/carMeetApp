'use strict';

var React = require('react-native');
var ReactFireMixin = require('reactfire');
var _ = require('lodash');

var {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Dimensions,
} = React;

<<<<<<< Updated upstream
var {
  width,
  height,
} = Dimensions.get('window');

var Firebase = require('../../firebase');
var Banner = require('./Banner');
var Content = require('./Content');
var Scrolling = require('./ScrollView');
var JoinButton = require('./JoinButton')

var HomeScene = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    this.bindAsObject(Firebase.child('event'), 'event');
  },

  getInitialState: function() {
    return {
      instagram: new Animated.Value(0),
      instagramExpanded: false
    }
  },

    expandInstagram: function() {
    Animated.sequence([
      Animated.timing(
        this.state.instagram,
        {
          easing: Easing.elastic(1),
          toValue: this.state.instagramExpanded ? 1 : 0
        }
      )
    ]).start();

    this.setState(Object.assign(this.state, {instagramExpanded: !this.state.instagramExpanded}))
  },

  render: function() {
    if (_.isNull(this.state) || _.isUndefined(this.state.event)) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Banner image={this.state.event.banner} />
        <Content event={this.state.event} />
        <Animated.View style={{
            width: width,
            height:this.state.instagram.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 380]
            }),
            padding: 1,
            margin: 3,
            marginBottom: 10,
           }}>
            <TouchableWithoutFeedback onPress={this.expandInstagram}>
              <Text style={styles.hashtag}>
                  {this.state.event.hashtag}
              </Text>
            </TouchableWithoutFeedback>
            <Scrolling {...this.state.event} />
          </Animated.View>
        <View style={styles.navBar}>
          <JoinButton />
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'white',
  },

  navBar: {
    flexDirection: 'row',
  },

  scrollingBar: {
    backgroundColor: 'white',
  },

  hashtag: {
    color: '#737373',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: "700"
  }
});

module.exports = HomeScene;
