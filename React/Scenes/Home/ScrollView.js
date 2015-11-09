'use strict';

var React = require('react-native');
var {values} = require('lodash');

var {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  ListView,
  Dimensions,
} = React;

var FirebaseModel = require('../../Mixins/FirebaseModel');

var {
  width,
  height,
} = Dimensions.get('window');

var Scrolling = React.createClass({
  mixins: [
    FirebaseModel(require('../../firebase'), {
      stream: 'instagram/nefocus'
    })
  ],

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1.id !== row2.id,
      }),
      count: 0,
    };
  },

  handleRefValue(snapshot) {
    var count = snapshot.numChildren();
    var thumbs = values(snapshot.val());

    thumbs = thumbs.slice((count - 50), count);
    thumbs.reverse();

    this.setState({
      count: count,
      dataSource: this.state.dataSource.cloneWithRows(thumbs),
      loaded: true
    });
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
            console.log(image);
            return (
              <Thumb image={image.image} icon={image.user.profile_picture} username={image.user.username}/>
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
      <View style={styles.container}>

        <View style={styles.userInfo}>
        <Image style={styles.icon} source={{uri:this.props.icon}} />
        <Text style={styles.username}>{this.props.username}</Text>
        </View>
        <View style={styles.button}>
        <Image style={styles.img} source={{uri:this.props.image}} />
      </View>
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

  userInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 5,
    marginLeft: 15,
  },

  scrollView: {
    flex:1,
    height: (height * .80),
  },
  containerPage: {
    height: (height * .74),
    width: width,
  },
  button: {
    margin: 1,
    alignItems: 'center',
    paddingBottom: 5,
  },
  buttonContents: {
    flexDirection: 'row',
    width: width,
    height: 64,
  },
  img: {
    width: width,
    height: width,
  },
  username: {
    color: '#125688',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: "700",
    textAlign: 'right',
    marginLeft: 5,
    marginTop: 5,

  },
  icon: {
    height: 30,
    width:30,
    borderRadius:15,
  },
});

module.exports = Scrolling