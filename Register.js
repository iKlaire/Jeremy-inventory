import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

export default class App extends Component {

    render() {
        return (
            <ScrollView style={{
              padding: 50,

            }}>
                <Text
                    style={{fontSize: 30}}>
                    Register New Item
                </Text>
                <TextInput placeholder='The QR codec info will print here ' />

                <TextInput placeholder='Given By' />

                <TextInput placeholder='Receive By' />

                <TextInput placeholder='Remark' />

                <View style={{margin:80}} />
                <Button
                        onPress={this.props.onLoginPress}
                        title="Submit"
                    />
                </ScrollView>
            )
    }
}
