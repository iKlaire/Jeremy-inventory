import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    return (
        <TouchableHighlight style={styles.menuItem} onPress={this.props.onPress} underlayColor="white">
          <Text style={styles.header}>{this.props.title}</Text>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    menuItem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#fff',
      borderWidth: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'rgba(255,255,255, .1)',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10
    },
    header: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      margin: 'auto',
      width: '100%',
      height: '100%',
      color: 'white',
      fontSize: 35,
      backgroundColor: 'rgba(255,255,255, .1)',
      paddingTop: 26
    }
});
