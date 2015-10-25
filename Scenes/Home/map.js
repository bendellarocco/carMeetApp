'use strict';

var React = require('react-native');

var {
  MapView,
  StyleSheet,
  View,
} = React;


var location = {
  latitude: 42.5348904,
  longitude: -71.7435133,
  latitudeDelta: 1,
  longitudeDelta: 1,
  title: 'Meet Location'

};

var Map = React.createClass({

  getInitialState() {
    return {
      mapRegion: null,
      mapRegionInput: null,
      annotations: this._getAnnotations(location),
      isFirstLoad: true,
    };
  },

  _getAnnotations(location) {
  return [{
      longitude: location.longitude,
      latitude: location.latitude,
      title: location.title,
  }];
},



  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          region={this.state.mapRegion || location}
          annotations={this.state.annotations || undefined}
          scrollEnabled = {false} 
          zoomEnabled = {false} />
      </View>
    );
  },
});



 var styles = StyleSheet.create({
  map: {
    height: 150,
    margin: 3,
  },
});

module.exports = Map
