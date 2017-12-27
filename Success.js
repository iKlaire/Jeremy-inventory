import React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import MenuItem from './MenuItem';

class Success extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
    <ImageBackground
      source={ require('./submit.jpg')}
      style={styles.container}>
      <View style={styles.menuContainer}>
        <MenuItem onPress={() => navigate("Home")} title="Back to home page"/>
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
 menuContainer: {
   height: '20%',
   flexDirection: 'row',
   flexWrap: 'wrap'
 }

});

export default Success;
