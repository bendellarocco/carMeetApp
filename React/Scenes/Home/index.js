'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');

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

var {
  width,
  height,
} = Dimensions.get('window');

var Event = require('./Event');
var Scrolling = require('./ScrollView');
var JoinButton = require('./JoinButton');
var Drag = require('../../Components/DragView')

var HomeScene = React.createClass({
  getInitialState: function() {
    return {
      instagram: new Animated.Value(0),
      eventsFade: new Animated.Value(0),
      instagramExpanded: false,
      eventsFaded: false,
    }
  },

  expandInstagram: function() {
    this.fadeGoing()

    Animated.sequence([
      Animated.timing(
        this.state.instagram,
        {
          easing: Easing.elastic(1),
          toValue: this.state.instagramExpanded ? 1 : 0
        },
      )
    ]).start();

    this.setState(Object.assign(this.state, {instagramExpanded: !this.state.instagramExpanded}))
  },

  fadeGoing: function() {
    Animated.sequence([
      Animated.timing(
        this.state.eventsFade,
        {
          toValue: this.state.eventsFaded ? 1 : 0
        },
      )
    ]).start();

    this.setState(Object.assign(this.state, {eventsFaded: !this.state.eventsFaded}))
  },

  render: function() {
    console.log('Scenes/Home', 'render');

  return (
      <View style={styles.container}>
        <Animated.View style={{
          height: this.state.eventsFade.interpolate({
              inputRange: [0, 1],
              outputRange: [500, 175]
            }),
          width: width,

        }}>
          <Event />
        </Animated.View>

        <Animated.View style={{
          width: width,
          height:this.state.instagram.interpolate({
            inputRange: [0, 1],
            outputRange: [100, 405]
          }),
          padding: 1,
          margin: 3,
          marginBottom: 10,
          borderStyle: 'solid',
          borderColor: '#D8D8D8 ',
          borderTopWidth: 1,

         }}>
          <TouchableWithoutFeedback onPress={this.expandInstagram}>
            <Text style={styles.hashtag}>
                #NeFocus
            </Text>
          </TouchableWithoutFeedback>
          <Scrolling />
        </Animated.View>
        <View style={styles.navBar}>
          <JoinButton />
        </View>
        <Drag>
        </Drag>
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
    position: 'absolute',
    bottom:0,
    width: width,

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
