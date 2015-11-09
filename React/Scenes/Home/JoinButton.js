'use strict';

var React = require('react-native');
// var EventAction = require('../../Actions/Event');

var {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableWithoutFeedback
} = React;

var JoinButton = React.createClass({

  handleGoing: function() {
    // EventAction.addGoing({name: 'adam', age: 25});
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.container} onPress={this.handleGoing}>
          <View style={styles.container}>
            <Text style={styles.text}>Join</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#00A4C5',
    height: 40
  },
  
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 20
  }
});

module.exports = JoinButton;
