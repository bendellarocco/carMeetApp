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
  Navigator,
} = React;

var {
  width,
  height,
} = Dimensions.get('window');

var Event = require('./Event');
var Scrolling = require('./ScrollView');
var JoinButton = require('./JoinButton');
var ProfileButton = require('./ProfileButton');
var MemberFinderButton = require('./MemberFinderButton');

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
    Animated.parallel([
      Animated.timing(
        this.state.instagram,
        {
          easing: Easing.elastic(1),
          toValue: this.state.instagramExpanded ? 0 : 1
        },
      ),
      Animated.timing(
        this.state.eventsFade,
        {
          toValue: this.state.eventsFaded ? 0 : 1
        },
      )
    ]).start();

    this.setState(Object.assign(this.state, {instagramExpanded: !this.state.instagramExpanded}))
    this.setState(Object.assign(this.state, {eventsFaded: !this.state.eventsFaded}))
  },

  render: function() {

  return (
      <View style={styles.container}>
        <Animated.View style={{
          height: this.state.eventsFade.interpolate({
              inputRange: [0, 1],
              outputRange: [580, 175]
            }),
          width: width,

        }}>
          <Event user={this.props.user} />
        </Animated.View>

        <Animated.View style={{
          width: width,
          height:this.state.instagram.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 405]
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
                Instagram Feed
            </Text>
          </TouchableWithoutFeedback>
          <Scrolling />
        </Animated.View>
        <View style={styles.navBar}>
          <ProfileButton navigator={this.props.navigator}/>
          <JoinButton />
          <MemberFinderButton navigator={this.props.navigator}/>
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
    fontWeight: "700",
    marginBottom: 25,
  },

  icon: {
    height:32,
    width:32,
  },
});

module.exports = HomeScene;
