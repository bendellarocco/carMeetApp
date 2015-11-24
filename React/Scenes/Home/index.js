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

var ExpandableNavigation = require('../../Components/ExpandableNavigation');

var Event = require('./Event');
var Scrolling = require('./ScrollView');
var JoinButton = require('./JoinButton');
var ProfileButton = require('./ProfileButton');

var HomeScene = React.createClass({
  render: function() {
    console.log('Scenes/Home', 'render');

    const windowHeight = Dimensions.get('window').height;
    const minimizedHeight = 100;
    const maximizedHeight = windowHeight - minimizedHeight;

    return (
      <View style={styles.container}>

        <ExpandableNavigation panels={[
          {
            defaultHeight: 400,
            minimizedHeight: minimizedHeight,
            maximizedHeight: maximizedHeight,
            component: (onActivate, panelState) => {
              return (
                <View style={{backgroundColor: 'yellow', flex: 1}}>
                  <Event expand={onActivate} state={panelState} />
                </View>
              );
            }
          },
          {
            defaultHeight: 400,
            minimizedHeight: minimizedHeight,
            maximizedHeight: maximizedHeight,
            component: (onActivate, panelState) => {
              return (
                <View style={{backgroundColor: 'yellow', flex: 1}}>
                  <Event expand={onActivate} state={panelState} />
                </View>
              );
            }
          },
          {
            defaultHeight: windowHeight - 400,
            minimizedHeight: minimizedHeight,
            maximizedHeight: maximizedHeight,
            component: (onActivate, panelState) => {
              return (
                <View style={{backgroundColor: 'red', flex: 1}}>
                  <Scrolling expand={onActivate} state={panelState} />
                </View>
              );
            }
          }
        ]} />

        <View style={styles.navBar}>
          <JoinButton />
          <ProfileButton />
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
    bottom:
    0,
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
