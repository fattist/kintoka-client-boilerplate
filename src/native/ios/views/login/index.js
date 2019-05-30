import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth0 from 'react-native-auth0';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    const auth0 = new Auth0({ domain: 'kintoka.auth0.com', clientId: '4C3wpQoKS0j2iNl46xWNJ1jrQzpn8Snv' });

    console.log('start');
    auth0
      .webAuth
      .authorize({scope: 'openid profile email', audience: 'https://kintoka.auth0.com/userinfo'})
      .then(credentials =>
        console.log(credentials)
        // Successfully authenticated
        // Store the accessToken
      )
      .catch(error => console.log(error));

    return (
      <View style={styles.container}>
        <Text style={styles.center}>Login!</Text>
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
