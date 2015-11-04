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
              <Description {...this.props.event}/>
          </View>
        	<View style={styles.guestArea}>
          		<GuestInfo {...this.props.event}/>
        	</View>
          <View style={styles.carousel}>
              <Scrolling {...this.props.event} />
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
    width: 378,
    height: 500,
    backgroundColor: "white"
  },

  guestArea: {
    flex: 1,
    width: 378,
    height:275,
    marginRight: 5,
    backgroundColor: "white"
  },

  carousel: {
    flex: 1,
    width: 365,
    height:375,
    padding: 1,
    margin: 3,
  },


});

module.exports = Content;