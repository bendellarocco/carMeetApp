import React from 'react-native';
import Dimensions from 'Dimensions';
import {partial} from 'lodash';

const {
  Component,
  Children,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  StatusBarIOS
} = React;

class ExpandableSection extends Component {
  render() {
    return (
      <View style={{height: this.props.height, flexDirection: 'column'}}>
        {this.props.children}
      </View>
    );
  }
}

class ExpandableNavigation extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor(props) {
      super(props);
      this.state = {
        active: -1
      };
  }

  handleActivate(active) {
    console.log('handle activate');
    this.setState({active})
  }

  render() {
    const children = this.props.panels.map((child, i) => {
      const height = this.state.active > -1 ?
        i == this.state.active ? child.maximizedHeight : child.minimizedHeight
        : child.defaultHeight;
      const state = this.state.active > -1 ?
        i == this.state.active ? 'maximized' : 'minimized'
        : 'default';
      return (
        <ExpandableSection height={height}>
          {child.component(partial((i) => this.handleActivate(i), i), state)}
        </ExpandableSection>
      );
    });

    return (
      <View style={{height: this.props.height}}>
        {children}
      </View>
    );
  }
}

export default ExpandableNavigation;
