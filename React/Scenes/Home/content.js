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
      pan: new Animated.Value(0)
    }
  },

  expandInstagram: function() {
    Animated.sequence([
      Animated.timing(
        this.state.pan,
        {
          easing: Easing.elastic(1),
          toValue: 1
        }
      )
    ]).start();
  },

  componentDidMount: function() {

  },

	render () {
		return (
			<View style={styles.content}>
          <View style={styles.description}>
              <Description {...this.props.event}/>
          </View>
          <TouchableWithoutFeedback onPress={this.expandInstagram}>
        	<View style={styles.guestArea}>
          		<GuestInfo {...this.props.event}/>
        	</View>
                      </TouchableWithoutFeedback>
          <Animated.View style={{
            width: 365,
            height:this.state.pan.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 800]
            }),
              padding: 1,
            margin: 3,
            marginBottom: 10,
           }}>
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
    width: 378,
    height: 450,
    backgroundColor: "white"
  },

  guestArea: {
    flex: 1,
    width: 378,
    height:325,
  },

  carousel: {
    flex: 1,
    width: 365,
    height:375,
    padding: 1,
    margin: 3,
    marginBottom: 75,
  },


});

module.exports = Content;