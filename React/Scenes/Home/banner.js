'use strict';
var MEET_DATA = [
  {name: "Pre-Winter Mode Meet", date: "November 8th 2015", time: "4:00", banner: {main: ('http://farm9.staticflickr.com/8227/8531521317_a63d3e5f7c_b.jpg')}}
];
var React = require('react-native');
var Firebase = require('firebase');

var {
  Image,
  Text,
  StyleSheet,
  View,
} = React;


var Banner = React.createClass({

  getInitialState: function () {
    return {
      loading: true,
      data: {}
    };
  },

  componentDidMount: function() {
    const ref = new Firebase('https://blazing-inferno-7802.firebaseio.com/event');

    ref.on('value', function(snapshot) {
      this.setState(Object.assign(this.state, {
        loading: false,
        data: snapshot.val()
      }));
    }.bind(this), function (errorObject) {

    });
  },

	render() {
        var data = MEET_DATA[0];
    return (
		<View style={styles.mainImageContainer}>
          <Image
            style={styles.mainImage}
            source={require('image!banner')}>
          </Image>
          <Text style={styles.name}>
            {this.state.loading ? <Text>loading...</Text> : <Text>{this.state.data.title}</Text>}
          </Text>
          <Text style={styles.date}>
            {this.state.loading ? <Text>loading...</Text> : <Text>{this.state.data.date}</Text>}
          </Text>
    </View>
    );
	},
});

var styles = StyleSheet.create({
mainImageContainer: {
    alignItems: 'center',
    position: 'relative',
    height: 135,
    backgroundColor: 'Black',
    marginBottom: 0,
  },
  mainImage: {
    height: 135,
    width: 378,
    position: 'relative',
    top: 0,

  },
  name: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    position: 'absolute',
    bottom: 0,
    left: 5,
    fontSize: 20,
    backgroundColor: 'transparent',

  },
  date: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 14,
    position: 'absolute',
    bottom: 3,
    right: 5,
    backgroundColor: 'transparent',
  },

});

module.exports = Banner;