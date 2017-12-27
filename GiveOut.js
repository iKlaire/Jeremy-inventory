import React, { Component } from 'react';
import { Text, TextInput, ScrollView, Dimensions, StyleSheet, Button, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { CheckBox } from 'react-native-elements';
import MenuItem from './MenuItem';

export default class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    code: '',
    date: new Date(),
    rb: '',
    gb: '' ,
    remark: ''
  };
   this.setChecked = this.setChecked.bind(this);
   this.onFormSubmit = this.onFormSubmit.bind(this);
}

setChecked() {
  this.setState({checked: !this.state.checked});
}

onFormSubmit(e){
  e.preventDefault();
  const {
    code,
    date,
    rb,
    gb,
    remark
  } = this.state;

  getItemByCode(code).then((res) => {
    let inOutStatus = res.data.inOutStatus;
    let isStatusIn = res.data.isStatusIn;
    if (isStatusIn) {
      inOutStatus.push({
        receiveBy,
        giveBy,
        dateOut: date,
        dateIn: null,
        remark
      });
    } else {
      let iOS = inOutStatus[inOutStatus.length - 1];
      iOS.dateIn = date;
      inOutStatus[inOutStatus.length - 1] = iOS;
    }
    if (res.status === 201) {
      updateItem({
        code,
        isStatusIn,
        inOutStatus
      }).then((res) => {
        alert(res);
        if (res.status === 201) {
          navigate("success")
        }
      }).catch((error) => {alert(error);})
    }
  }).catch((error) => {alert(error);})


}

render() {
  const {navigate} = this.props.navigation;
  return (
    <ScrollView style={{ padding: 30 }}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>In / Out </Text>

      <Button
        backgroundColor='#2095F2'
        large
        raised
        iconRight={{name: 'camera-enhance'}}
        onPress={() => navigate("qrScanner", { returnData: this.returnData.bind(this) }) }
        title="Scan Barcode"
      />
      <Text style={styles.formTitle}>QR Code:</Text>
      <TextInput
        style={{height: 40}}
        editable={false}
        value={this.state.code}
      />

      <Text style={{fontSize: 20}}>Date:</Text>
      <TextInput
        style={{height: 40}}
        editable={false}
        value={this.state.date}
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

      <Text style={{fontSize: 20}}>Remarks:</Text>
      <TextInput
        style={{height: 40, marginBottom: 30}}
        placeholder="Remarks"
        onChangeText={(remark) => this.setState({remark})}
      />

      <Button
              onPress={this.onFormSubmit}
              title="Submit"
          />
    </ScrollView>
  );
}
}
