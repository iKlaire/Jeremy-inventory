import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MenuItem from './MenuItem';

export default class HomeScreen extends React.Component {
  componentWillMount() {
    StatusBar.setHidden(true);
  }
  static navigationOptions = {
    header: null
  }
 render() {
   const {navigate} = this.props.navigation;
   return (
     <ImageBackground
       source={ require('./background.jpg')}
       style={styles.container}>
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <Text style={styles.header}> I N V E N T O R Y </Text>
          </View>
          <View style={styles.top}>
            <MenuItem style={styles.header} onPress={() => navigate("Register")} title="Add new"/>
            <MenuItem style={styles.header} onPress={() => navigate("gO")} title="Give Out"/>
            <MenuItem style={styles.header} onPress={() => navigate("ItemList")} title="Item List"/>
          </View>
        </View>
     </ImageBackground>
   );
  }
}
const styles = StyleSheet.create({
 container:{
   flex: 1,
   width: '100%',
   height:'100%',
 },
 overlayContainer: {
   flex: 1,
   //backgroundColor: 'rgba(47,163,218, .4)'
 },
 top: {
   height: '50%',
   alignItems: 'center',
   justifyContent: 'center'
 },
 header: {
   color: 'white',
   fontSize: 28,
   borderColor: '#fff',
   borderWidth: 2,
   padding: 20,
   paddingLeft: 40,
   paddingRight: 40,
   backgroundColor: 'rgba(255,255,255, .1)'
 },
 menuContainer: {
   height: '50%',
   flexDirection: 'row',
   flexWrap: 'wrap'
 }

});
