import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Menu extends Component {
    static navigationOptions = {
        title: 'Menu',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.center}>Menu!</Text>
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
