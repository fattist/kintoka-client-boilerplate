import React, { Component } from 'react';
import { Alert, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Auth0 from 'react-native-auth0';
import Config from 'react-native-config';
import { connect } from 'react-redux';

import * as a from '@selectors/auth0';
import * as u from '@selectors/user';

import { mainColor } from '@shared/stylesheets/constants';
import { options as headerOptions } from '@shared/header';
import { styles as commonStyles } from '@shared/stylesheets/common';
import { styles as formStyles } from '@shared/stylesheets/form';

class register extends Component {
    constructor(props) {
        super(props);

        this.auth0 = new Auth0({ domain: Config.AUTH0_DOMAIN, clientId: Config.AUTH0_CLIENT_ID });
        this.submit = this.submit.bind(this);
    }

    static navigationOptions = Object.assign({}, headerOptions, { title: '' });

    componentDidUpdate() {
        if (this.props.registered) {
            this.props.navigation.navigate('Login');
        }
    }

    submit() {
        Alert.alert('submit');

        this.auth0.auth.createUser({
            email: this.props.email,
            password: this.props.password,
            connection: 'Username-Password-Authentication'
        }).then(response => 
            this.props.submit(response, a.AUTH0_REGISTERED)
        ).catch(error =>
            this.props.submit(error, a.AUTH0_ERROR)
        )
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
                        onChangeText={email => {
                            this.props.update({
                                email: email
                            }, u.USER_EMAIL)
                        }}
                        style={formStyles.input}
                        value={this.props.email}
                        placeholder={'email'}
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
                        <Text style={formStyles.buttonText}>register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ auth0, user }) => ({
    authenticated: auth0.authenticated,
    disabled: user.disabled,
    email: user.email || '',
    error: auth0.error,
    password: user.password || '',
    registered: auth0.registered
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
})

export default connect(mapStateToProps, mapDispatchToProps)(register);