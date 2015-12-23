'use strict';

var React = require('react-native');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var ReactFireMixin = require('reactfire');
var _ = require('lodash');
var NavigationBar = require('react-native-navbar');

var {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  StatusBarIOS,
} = React;

var Firebase = require('../../firebase');
var AddFriend = require('./AddFriendButton');
var HomeScene = require('./index');

var {
  width,
  height,
} = Dimensions.get('window');


var Profile  = React.createClass({
  mixins: [PureRenderMixin, ReactFireMixin],

  componentWillMount: function() {
    this.bindAsObject(Firebase.child('event'), 'event');
  },

  render: function() {

  const leftButtonConfig = {
    title: '<',
    tintColor: 'white',
    handler: () => this.props.navigator.pop({component:HomeScene}),
  };

  const titleConfig = {
    title: 'Profile',
    tintColor: 'white',
  };

  if (_.isNull(this.state) || _.isUndefined(this.state.event)) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    }

    return (
      <View style={styles.content}>
      <NavigationBar
        statusBar={{style: 'light-content', hideAnimation: 'none', showAnimation: 'none', hidden: false}}
        title={titleConfig}
        leftButton={leftButtonConfig}
        tintColor={'#00A4C5'}
        style={styles.navbar}/>
      <Text>Driver Profile</Text>
      <View style={styles.licenseContainer}>
        <View style={styles.licenseCar}>
          <Text style={styles.licenseCar}>2006 Mitsubishi Eclipse</Text>
        </View>

      <View>
        <View style={styles.personalInfo}>
          <Text style={styles.licenseText}>Ben</Text>
          <Text style={styles.licenseText}>Dellarocco</Text>
          <Text style={styles.licenseText}>Marlborough, Massachusetts</Text>
        </View>

        <View style={styles.profileImage}>

        </View>
      </View>

      <View>
        <View style={styles.driverNum}>
            <Text style={styles.licenseTitle}>Driver Number:</Text>
            <Text style={styles.licenseText}>1234567890</Text>
          </View>

          <View style={styles.joinDate}>
            <Text style={styles.licenseTitle}>Join Date:</Text>
            <Text style={styles.licenseText}>November 22, 2015</Text>
          </View>
        </View>

      </View>
      <View style={styles.mainImage}>


      </View>
      <View style={styles.addFriend}>
          <AddFriend />
        </View>
      </View>
    );

  }
});

var styles = StyleSheet.create ({
  content: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
  },

  navbar: {
    flex: 1,
    width: width,
    marginTop: -10,
  },

  licenseContainer: {
    width: (width * .93),
    height: (height * .25),
    backgroundColor: '#FFFFFF',
    opacity: 1,
    marginTop: (height * .09),
    borderStyle: 'solid',
    borderColor: '#00A4C5',
    borderWidth: 2,
    padding: 5,
  },

  profileImage: {
    height: 75,
    width: 75,
    backgroundColor: 'black',
    position: 'absolute',
    right: 5,
    top: 10,
  },

  licenseCar: {
    color: '#00A4C5',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: "700",
    alignItems: 'center',
  },

  licenseTitle: {
    color: '#00A4C5',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: "700",
  },

  personalInfo: {
    marginTop: 10,

  },

  driverNum: {
    position: 'absolute',
    left: 1,
    top: 25,

  },

  joinDate: {
    position: 'absolute',
    right: 1,
    top: 25,

  },

  licenseText: {
    color: '#737373',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: "700",
  },


  mainImage: {
    width: (width * .93),
    backgroundColor: '#FFFFFF',
    marginTop: 4,
    opacity: 1,
    height: (height * .48),
    borderStyle: 'solid',
    borderColor: '#00A4C5',
    borderWidth: 2,
  },


  addFriend: {
    flexDirection: 'row',
    position: 'absolute',
    bottom:0,
    width: width,

  },
});

module.exports = Profile;
