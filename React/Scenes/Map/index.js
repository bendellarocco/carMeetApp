'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var Mapbox = require('react-native-mapbox-gl');

var LocationsStore = require('../../Stores/Locations');

var {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  StatusBarIOS,
  View
} = React;

var {
  width,
  height,
} = Dimensions.get('window');

var Map = React.createClass({
  mixins: [Mapbox.Mixin, PureRenderMixin],

  getInitialState() {
    var locations = LocationsStore.getState().map((location) => {
      return {
        coordinates: location.location,
        'type': 'point',
        title: 'This is marker ' + location.id,
        subtitle: 'It has a rightCalloutAccessory too',
        rightCalloutAccessory: {
          url: 'https://cldup.com/9Lp0EaBw5s.png',
          height: 25,
          width: 25
        },
        annotationImage: {
          url: 'https://cldup.com/CnRLZem9k9.png',
          height: 25,
          width: 25
        },
        id: 'marker' + location.id
      };
    });

  //   console.log(locations);

    return {
      center: {
        latitude: 37.785834,
        longitude: -122.406417
      },
      zoom: 11,
      annotations: locations
     };
  },

  componentDidMount() {
    LocationsStore.listen(this.handleChange);
  },

  handleChange() {
    this.setState(this.getInitialState());
  },

  onRegionChange(location) {
    this.setState({ currentZoom: location.zoom });
  },

  onRegionWillChange(location) {
    // console.log(location);
  },

  onUpdateUserLocation(location) {
    // console.log(location);
  },

  onOpenAnnotation(annotation) {
    // console.log(annotation);
  },

  onRightAnnotationTapped(e) {
    // console.log(e);
  },

  render: function() {
    // console.log('Scenes/Home/Map', 'render');

    return (
      <View style={styles.container}>

        <Mapbox
          style={styles.map}
          direction={0}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsUserLocation={true}
          ref='map'
          accessToken={'pk.eyJ1IjoiYWRhbWp2OTAiLCJhIjoiY2lmNGJvd3h2MDFoZXN0a3BibmJ3aHBoNCJ9.8yol40r02rquguPnttJGxQ'}
          styleURL={'asset://styles/streets-v8.json'}
          centerCoordinate={this.state.center}
          userLocationVisible={true}
          zoomLevel={this.state.zoom}
          onRegionChange={this.onRegionChange}
          onRegionWillChange={this.onRegionWillChange}
          annotations={this.state.annotations}
          onOpenAnnotation={this.onOpenAnnotation}
          onRightAnnotationTapped={this.onRightAnnotationTapped}
          onUpdateUserLocation={this.onUpdateUserLocation} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex:1
  },
  map: {
    width, height
  }
});

module.exports = Map;
