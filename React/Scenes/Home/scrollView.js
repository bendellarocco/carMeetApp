'use strict';

var _ = require('lodash');
var React = require('react-native');
var Firebase = require('firebase');
var InstagramStore = require('../../Stores/Instagram');



//var THUMBS = ['http://www.spencer1984.com/image/m348c.jpg', 'http://tearstone.com/grid/wp-content/uploads/2007/10/P1000110s-175x150.jpg', 'https://wetshinedotnet.files.wordpress.com/2007/10/59-subaru.jpg?w=175&h=150&crop=1'];
//var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

var {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  ListView,
} = React;

var Scrolling = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1.id !== row2.id,

      }),
      loaded: false,
      count: 0,
    };
  },

  componentDidMount() {
    InstagramStore.listen(this.onChange);
  },

  componentWillUnmount() {
    InstagramStore.unlisten(this.onChange);
  },

  onChange() {
    var ig = InstagramStore.getState()
    var thumbs = _.values(ig.meetup).slice(0, 50);
    var count = thumbs.length;
    thumbs.reverse();
    this.setState({
      count: count,
      dataSource: this.state.dataSource.cloneWithRows(thumbs),
      loaded: true,
    });
  },

  renderThumb(image) {
    return <span>Thumb</span>;
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Instagram...
        </Text>
      </View>
    );
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.container}>
        
        <ListView
          style={styles.scrollView}
          dataSource={this.state.dataSource}
          renderRow={(image) => {
            return (
              <Thumb uri={image.image} />
            );
          }}
        />
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

    borderStyle: 'solid',
    borderColor: '#00A4C5',
    backgroundColor: '#E0E0E0',
  },

  scrollView: {
    flex:1,
    height: 540,
  },
  containerPage: {
    height: 500,
    width: 340,
  },
  button: {
    margin: 1,
    alignItems: 'center',
    
    padding: 5,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 340,
    height: 64,

  },
  img: {
    width: 340,
    height: 340,

  },
  hashtag: {
    color: '#737373',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: "700"
  },
});

module.exports = Scrolling
