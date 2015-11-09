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

var Description = require('./Description');
var Scrolling = require('./ScrollView');
var GuestInfo = require('./GuestInfo');

var Content = React.createClass ({
	render () {
		return (
			<View style={styles.content}>
        <View style={styles.description}>
          <Description {...this.props.event}/>
        </View>
      	<View style={styles.guestArea}>
        	<GuestInfo {...this.props.event}/>
      	</View>
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
    height: (height * .66),
    backgroundColor: "white"
  },

  guestArea: {
    flex: 1,
    width: width,
    height: (height * .48),
  }
});

module.exports = Content;
