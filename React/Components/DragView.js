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

var Scrolling = require('../Scenes/Home/ScrollView');

 class DraggableView extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       pan: new Animated.ValueXY({x:0, y: 0}),
     };
     this.state.panResponder = PanResponder.create({
       onMoveShouldSetPanResponder: () => true,
       onPanResponderMove: Animated.event([null, {
         dx: this.state.pan.x,
         dy: this.state.pan.y,
       }]),
       onPanResponderRelease: () => {
         Animated.spring(
           this.state.pan,
           {toValue: {x: 0, y: this.state.pan.y}}
         ).start();
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
