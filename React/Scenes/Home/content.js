'use strict';

var React = require('react-native');

var {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} = React;

var {
  width,
  height,
} = Dimensions.get('window');

var Description = require('./description');
var Scrolling = require('./scrollView');
var GuestInfo = require('./guestInfo');


var Content = React.createClass ({
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



	render () {
		return (
			<View style={styles.content}>
          <View style={styles.description}>
            <Description {...this.props.event}/>
          </View>
        	<View style={styles.guestArea}>
          	<GuestInfo {...this.props.event}/>
        	</View>
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
                  {this.props.event.hashtag}
              </Text>
            </TouchableWithoutFeedback>
            <Scrolling {...this.props.event} />
          </Animated.View>
        </View>
		);
	}
});

var styles = StyleSheet.create ({

  content: {
    backgroundColor: 'white',
    flex: 4,
    padding: 0,
    marginTop: 0,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  description: {
    flex: 2,
    width: width,
    height: 450,
    backgroundColor: "white"
  },

  guestArea: {
    flex: 1,
    width: width,
    height:325,
  },

    hashtag: {
    color: '#737373',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: "700"
  },

});

module.exports = Content;