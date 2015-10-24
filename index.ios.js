'use strict';

var React = require('react-native');
var LoginScene = require('./Scenes/Login');
var {
  AppRegistry,
  StyleSheet,
  Navigator,
  View
} = React;

var Meetups = React.createClass({
  getInitialState: function () {
    return {
      route: {
        component: LoginScene
      }
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={this.state.route}
          renderScene={function(route, navigator) {
            return <route.component route={route} navigator={navigator} />;
          }} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('Meetups', () => Meetups);
