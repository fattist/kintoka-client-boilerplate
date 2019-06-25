import React, { Component } from 'react';
import { Alert, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { connect } from 'react-redux';

import * as a from '@selectors/auth0';
import * as u from '@selectors/user';

import a0 from '@shared/helpers/auth0';

import { mainColor } from '@shared/stylesheets/constants';
import { options as headerOptions } from '@shared/header';
import { styles as commonStyles } from '@shared/stylesheets/common';
import { styles as formStyles } from '@shared/stylesheets/form';

class login extends Component {
  constructor(props) {
    super(props);

    this.auth0 = new a0();
    this.checkSession = this.checkSession.bind(this);
    this.submit = this.submit.bind(this);
  }

  static navigationOptions = Object.assign({}, headerOptions, { title: '' });

  componentDidUpdate() {
    this.checkSession();
  }

  componentDidMount() {
    this.checkSession();
  }

  checkSession() {
    if (this.props.authenticated) {
      this.props.navigation.navigate('Profile');
    }
  }

  async submit() {
    Alert.alert('submit');

    try {
        const token = await this.auth0.login(this.props.username, this.props.password);

        this.props.submit(token, a.AUTH0_SUCCESS);
    } catch (error) {
        this.props.submit(error, a.AUTH0_ERROR);
    }
  }

  render() {
    return (
      <View style={commonStyles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={mainColor}
          />
          <View
              style={{
                  flex: 1,
                  justifyContent: 'flex-start'
              }}
          >
            <TextInput
                onChangeText={username => {
                    this.props.update({
                        username: username
                    }, u.USER_USERNAME)
                }}
                style={formStyles.input}
                value={this.props.username}
                placeholder={'username'}
                placeholderTextColor={'#fff'}
            />
            <TextInput
                secureTextEntry={true}
                onChangeText={password => {
                    this.props.update({
                        password: password
                    }, u.USER_PASSWORD)
                }}
                style={formStyles.input}
                value={this.props.password}
                placeholder={'password'}
                placeholderTextColor={'#fff'}
            />
          </View>
          <View
            style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginBottom: 40
            }}
          >
            <TouchableOpacity
              disabled={this.props.disabled}
              onPress={this.submit}
              style={formStyles.button}
            >
              <Text style={formStyles.buttonText}>login</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const mapStateToProps = ({ auth0, user }) => ({
  authenticated: auth0.authenticated,
  disabled: !(user.username.valid && user.password.valid),
  error: auth0.error,
  password: user.password.value || '',
  username: user.username.value || ''
});

const mapDispatchToProps = dispatch => ({
  submit: (payload, selector) => dispatch({
    type: `event_${selector}`,
    response: payload
  }),
  update: (payload, selector) => dispatch({
    type: selector,
    ...payload
})
});

export default connect(mapStateToProps, mapDispatchToProps)(login);