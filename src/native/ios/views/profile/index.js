import React, { Component } from 'react';
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import * as a from '@selectors/auth0';
import * as u from '@selectors/user';

import a0 from '@shared/helpers/auth0';
import a0m from '@shared/helpers/auth0/management/v2';

import { mainColor } from '@shared/stylesheets/constants';
import { options as headerOptions } from '@shared/header'
import { styles as commonStyles } from '@shared/stylesheets/common';
import { styles as formStyles } from '@shared/stylesheets/form';
import { ScrollView } from 'react-native-gesture-handler';

class profile extends Component {
    constructor(props) {
        super(props);

        this.auth0 = new a0();
        this.auth0Manager = new a0m();
        this.getProfile = this.getProfile.bind(this);
    }

    static navigationOptions = Object.assign({}, headerOptions, { title: '' });

    componentDidMount() {
        if (this.props.authenticated) {
            this.getProfile();
        } else {
            this.props.navigation.navigate('Home');
        }
    }

    async getProfile() {
        try {
            const { sub: userId } = await this.auth0.info(this.props.session.accessToken);
            const { accessToken: managementToken } = await this.auth0Manager.login(this.props.username, this.props.password);
            const profile = await this.auth0Manager.profile(managementToken, userId);

            this.props.update(a.AUTH0_PROFILE, profile);
        } catch(error) {
            console.error(error);
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={commonStyles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={mainColor}
                />
                {this.props.picture &&
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-start',
                            marginBottom: 10
                        }}
                    >
                        <Image
                            style={{width: 50, height: 50}}
                            source={{uri: this.props.picture}}
                        />
                    </View>
                }
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
                        onChangeText={phone => {
                            this.props.update({
                                phone: phone
                            }, u.USER_MOBILE_PHONE)
                        }}
                        style={formStyles.input}
                        value={this.props.phone}
                        placeholder={'phone'}
                        placeholderTextColor={'#fff'}
                    />
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
            </ScrollView>
        )
    }
}

const mapStateToProps = ({ auth0, user }) => ({
    authenticated: auth0.authenticated,
    disabled: !(user.username.valid && user.email.valid && user.password.valid && user.phone.valid),
    email: auth0.profile.email || '',
    password: user.password.value || '',
    phone: (auth0.profile.userMetadata && auth0.profile.userMetadata.phone) || '',
    picture: auth0.profile.picture || false,
    session: {
        accessToken: auth0.accessToken || null,
        expiresIn: auth0.expiresIn || null
    },
    username: user.username.value || ''
});

const mapDispatchToProps = dispatch => ({
    update: (selector, payload) => dispatch({
        type: `event_${selector}`,
        profile: payload
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(profile);