'use strict';

var React = require('react-native');
var EventStore = require('../../Stores/Event');
var EventActions = require('../../Actions/Event');
var {
  StyleSheet,
  Text,
  View
} = React;

var Scene = React.createClass({
  getInitialState() {
    return EventStore.getState();
  },

  componentDidMount() {
    EventStore.listen(this.onChange);

    EventActions.loadEvent({name: 'World'});
  },

  componentWillUnmount() {
    EventStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>Hello: {this.state.data.name}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: 'white'
  }
});

module.exports = Scene;
