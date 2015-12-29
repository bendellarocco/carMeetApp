'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var _ = require('lodash');
var ReactFireMixin = require('reactfire');

var Firebase = require('../../firebase');

var EventStore = require('../../Stores/Event');
var EventActions = require('../../Actions/Event');

var Banner = require('./Banner');
var Description = require('./Description');
var GuestInfo = require('./GuestInfo');

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

var Content = React.createClass ({
  mixins: [PureRenderMixin],

  getInitialState: function() {
    return {
      event: EventStore.getState()
    };
  },

  componentDidMount: function() {
  //  this.bindAsObject(Firebase.child('event'), 'event');
    EventStore.listen(this.handleChange);
    Firebase.child('event').on('value', this.loadEvent);
  },

  handleChange: function(event) {
      this.setState(this.getInitialState());
  },

  loadEvent: function(snapshot) {
    if (snapshot.exists()) {
      EventActions.didLoad(snapshot.val());
    }
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
        <Banner image={this.state.event.banner} />
        <View style={styles.description}>
          <Description date={this.state.event.date} user={this.props.user} />
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
