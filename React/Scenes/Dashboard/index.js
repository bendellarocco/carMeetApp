'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View
} = React;

var FirebaseModel = require('../../Mixins/FirebaseModel');

var Scene = React.createClass({
  mixins: [
    FirebaseModel(require('../../firebase'), {
      event: 'event'
    })
  ],

  render: function() {
    return (
      <View style={styles.container}>
        {this.state.loading ? <Text /> : <Text>Hello: {this.state.event.title}</Text>}
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
