'use strict';

var React = require('react-native');

 var {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  PanResponder
} = React;

var {
  width,
  height,
} = Dimensions.get('window');

var yLoc = 0

var Scrolling = require('../Scenes/Home/ScrollView');

 class DraggableView extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       pan: new Animated.ValueXY({x: 0, y: yLoc}),
     };
     this.state.panResponder = PanResponder.create({
       onMoveShouldSetPanResponder: () => true,
       onPanResponderMove: Animated.event([null, {
         dx: this.state.pan.x,
         dy: this.state.pan.y,
       }]),
       onPanResponderRelease: () => {
        yLoc = this.state.pan.y._value
        yLoc = (yLoc * -1)
          console.log(yLoc);
          if (yLoc < (width / 3)) {
          Animated.spring(
           this.state.pan,
           {toValue: {x: 0, y: 0}}
         ).start();
       } else {
          Animated.spring(
           this.state.pan,
           {toValue: {x: 0, y: -420}}
         ).start();
       }
     },
     });
   }
   render() {
     return (
       <Animated.View
         {...this.state.panResponder.panHandlers}
         style={this.state.pan.getLayout()}>
         <Text> Test </Text>
       </Animated.View>
     );
   }
 }

module.exports = DraggableView
