import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11

class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    return <Text>It works!</Text>;
  }
}

export default DetailScreen;


// import React from 'react';
// import { Text, View, Button } from 'react-native';
// import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
//
// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <View>
//         <Button
//             onPress={() => navigate('Detail')}
//             title="Click here"
//           />
//       </View>);
//   }
// }
//
// export default HomeScreen;
