'use strict';

var React = require('react-native');
var EventAction = require('../../Actions/Event');

var THUMBS = ['http://www.spencer1984.com/image/m348c.jpg', 'http://tearstone.com/grid/wp-content/uploads/2007/10/P1000110s-175x150.jpg', 'https://wetshinedotnet.files.wordpress.com/2007/10/59-subaru.jpg?w=175&h=150&crop=1'];
var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

var {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
} = React;

var Scrolling = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.hashtag}>
          {this.props.hashtag}
        </Text>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          horizontal={true}
          style={[styles.scrollView, styles.horizontalScrollView]}>
          {THUMBS.map(createThumbRow)}
        </ScrollView>
      </View>
    );
  },

});

var Thumb = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (
      <View style={styles.button}>
        <Image style={styles.img} source={{uri:this.props.uri}} />
      </View>
    );
  }
});

var styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: '#00A4C5',
  },

  scrollView: {
    height: 175,
    width: 365,

  },
  horizontalScrollView: {
    height: 152,
  },
  containerPage: {
    height: 125,
    width: 125,
    backgroundColor: 'white',
  },
  button: {
    margin: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 0,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    width: 125,
    height: 125,
    marginLeft: 10,
  },
  hashtag: {
    color: '#737373',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: "300"
  },
});

module.exports = Scrolling