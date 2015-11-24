'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var ReactFireMixin = require('reactfire');
var _ = require('lodash');

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

var Firebase = require('../../firebase');
var Banner = require('./Banner');
var Description = require('./Description');
var GuestInfo = require('./GuestInfo');

var Content = React.createClass ({
  mixins: [PureRenderMixin, ReactFireMixin],

  getInitialState: function() {
    return {
      going: new Animated.Value(0),
      details: new Animated.Value(0),
      detailsExpanded: false,
      goingExpanded: false,
    }
  },

  expandGoing: function() {
    Animated.parallel([
      Animated.timing(
        this.state.going,
        {
          easing: Easing.elastic(1),
          toValue: this.state.goingExpanded ? 0 : 1
        },
      ),
      Animated.timing(
        this.state.details,
        {
          toValue: this.state.detailsFaded ? 0 : 1
        },
      )
    ]).start();
    this.setState(Object.assign(this.state, {goingExpanded: !this.state.goingExpanded}))
    this.setState(Object.assign(this.state, {detailsExpanded: !detailsExpanded}))

  },

  expandDetails: function() {
    Animated.parallel([
      Animated.timing(
        this.state.instagram,
        {
          easing: Easing.elastic(1),
          toValue: this.state.details ? 0 : 1
        },
      ),
      Animated.timing(
        this.state.eventsFade,
        {
          toValue: this.state.going ? 0 : 1
        },
      )
    ]).start();
    this.setState(Object.assign(this.state, {goingExpanded: !this.state.goingExpanded}))
    this.setState(Object.assign(this.state, {detailsExpanded: !detailsExpanded}))

  },

  componentWillMount: function() {
    this.bindAsObject(Firebase.child('event'), 'event');
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
			<View style={styles.content}>
        <TouchableWithoutFeedback onPress={this.props.expand}>
          <Text>Expand Me</Text>
        </TouchableWithoutFeedback>
        <Banner image={this.state.event.banner} />
        <View style={styles.description}>
          <Description date={this.state.event.date} />
        </View>
      	<View style={styles.guestArea}>
        	<GuestInfo going={this.state.event.going} />
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
