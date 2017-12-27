import React, { Component } from 'react';
import { Text, TextInput, ScrollView, Dimensions, StyleSheet, Button, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { CheckBox } from 'react-native-elements';
import MenuItem from './MenuItem';

export default class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    startDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
    rb: '',
    gb: '' ,
    remark: ''
  };
   this.setChecked = this.setChecked.bind(this);
}

setChecked() {
  this.setState({checked: !this.state.checked});
}

render() {
  const {navigate} = this.props.navigation;
  return (
    <ScrollView style={{ padding: 30 }}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Give out Carte</Text>

      <View style={{
      height: '20%',
      flexDirection: 'row',
      flexWrap: 'wrap'}}>
        <MenuItem onPress={() => navigate("qr")} title="SCAN"/>
      </View>

      <Text style={{fontSize: 20}}>Give Out From Date:</Text>
      <TextInput
        style={{height: 40}}
        editable={false}
        value={this.state.startDate}
      />

      <Text style={{fontSize: 20}}>Give By :</Text>
      <TextInput
        style={{height: 40}}
        value={this.state.gb}
        onChangeText={(gb) => this.setState({gb})}
      />

      <Text style={{fontSize: 20}}>Receive By :</Text>
      <TextInput
        style={{height: 40}}
        value={this.state.rb}
        onChangeText={(rb) => this.setState({rb})}
      />

      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Remarks:</Text>
      <TextInput
        style={{height: 40, marginBottom: 30}}
        placeholder="Remarks"
        onChangeText={(remark) => this.setState({remark})}
      />

      <Button
              onPress={this.props.onLoginPress}
              title="Submit"
          />
    </ScrollView>
  );
}
}
