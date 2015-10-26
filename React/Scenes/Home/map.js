'use strict';

var React = require('react-native');
var Firebase = require('firebase');


var {
  MapView,
  StyleSheet,
  View,
  Text,
  Image,
} = React;


var location = {
  latitude: 42.5348904,
  longitude: -71.7435133,
  latitudeDelta: 1,
  longitudeDelta: 1,
  title: 'Meet Location'

};

var Map = React.createClass({


  componentDidMount: function () {
        const ref = new Firebase('https://blazing-inferno-7802.firebaseio.com/event');

    ref.on('value', function(snapshot) {
      this.setState(Object.assign(this.state, {
        loading: false,
        data: snapshot.val()
      }));
    }.bind(this), function (errorObject) {

    });
  },


  getInitialState() {
    return {
      mapRegion: null,
      mapRegionInput: null,
      annotations: this._getAnnotations(location),
      isFirstLoad: true,
      loading: true,
      data: {}
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
      <Image source={require('image!pin')} style={styles.icon} />
          <Text style={styles.location}>
              {this.state.loading ? <Text>loading...</Text> : <Text>{this.state.data.location}</Text>}
          </Text>
        <MapView
          style={styles.map}
          region={this.state.mapRegion || location}
          annotations={this.state.annotations || undefined}
          scrollEnabled = {false} 
          zoomEnabled = {false} 
          showsUserLocation = {false}/>
      </View>
    );
  },
});



 var styles = StyleSheet.create({
  map: {
    height: 126,
    width: 160,
    margin: 3,
  },
  location: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 12,
    marginLeft: 18,
    marginTop: 3,

  },
  icon: {
    height: 17,
    width: 11,
    position: 'absolute',
    marginLeft: 3,
    marginTop: 3,
    backgroundColor: 'transparent',
  },
});

module.exports = Map
