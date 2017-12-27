import React, { Component } from 'react';
import { Text, TextInput, ScrollView, Dimensions, StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { CheckBox, Button } from 'react-native-elements';
import MenuItem from './MenuItem';
import DatePicker from 'react-native-datepicker';
import { createItem } from './api.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerDate: null,
      code: '',
      isStatusIn: true
    };
     this.setChecked = this.setChecked.bind(this);
     this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  static navigationOptions = {
    title: 'Add New Item',
  };

  setChecked() {
    this.setState({isStatusIn: !this.state.isStatusIn});
  }

  returnData(code) {
    const currentDate = new Date();
    const registerDate = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
    const registerTime = currentDate.getHours() + '-' + (currentDate.getMinutes() + 1) + '-' + currentDate.getSeconds();
    this.setState({
      code: code,
      registerDate
    });
  }

  onFormSubmit() {
    e.preventDefault();
    const {
      code,
      registerDate,
      isStatusIn
    } = this.state;
    createItem({
      code,
      registerDate,
      isStatusIn
    }).then((res) => {
      if (res.status === 201) {
        navigate("success")
      }
    }).catch((error) => {})
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{ padding: 30 }}>
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
        <Text style={styles.formTitle}>Registration date:</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.registerDate}
          mode="datetime"
          placeholder="select date"
          format="YYYY-MM-DD   HH:mm:ss"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(registerDate) => {this.setState({registerDate})}}
        />
        <CheckBox
          center
          title='Is this item with you, Jeremy?'
          checked={this.state.isStatusIn}
          onPress={ this.setChecked }
          style={{fontSize: 20}}
        />
        <View style={{marginTop: 20}}>
          <Button
            backgroundColor='#2095F2'
            large
            onPress={() => navigate("success")}
            title="Submit"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    formTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10
    },
    picker: {
      backgroundColor: '#E5E5E5'
    }
});
