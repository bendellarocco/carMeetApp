'use strict';

var React = require('react-native');

var {
  Text,
  StyleSheet,
  View,
  Dimensions,
} = React;

var {
  width,
  height,
} = Dimensions.get('window');

var Description = require('./description');
var Scrolling = require('./scrollView');
var GuestInfo = require('./guestInfo');

var Content = React.createClass ({
	render () {
		return (
			<View style={styles.content}>
          <View style={styles.description}>
              <Description {...this.props}/>
          </View>
        	<View style={styles.guestArea}>
          		<GuestInfo {...this.props}/>
        	</View>
          <View style={styles.carousel}>
              <Scrolling {...this.props}/>
          </View>
        </View>
		);
	}
});

var styles = StyleSheet.create ({

  content: {
    backgroundColor: 'white',
    flex: 2,
    padding: 0,
    marginTop: 0,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  description: {
    flex: 1,
    width: 375,
    height: 370,
  },

  guestArea: {
    flex: 1,
    width: 378,
    height:370,
    marginRight: 5,
  },

  carousel: {
    flex: 1,
    width: 365,
    height:370,
    padding: 1,
    margin: 3,
  },


});

module.exports = Content;