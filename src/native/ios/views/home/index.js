import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
      title: 'Home',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.center}>Home!</Text>
            </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  center: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
