import React from 'react';
import { ListView, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { listItems } from './api';

export default class ItemList extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }

  componentWillMount() {
    listItems().then((res) => {
      if (res.status === 200) {
        let items = res.data;
        const itemCodes = res.data.map(i => i.code);
        this.setState({
          items,
          dataSource: ds.cloneWithRows(itemCodes)
        });
      }
    }).catch((error) => {
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
}
