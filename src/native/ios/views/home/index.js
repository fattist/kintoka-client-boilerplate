import React, { Component } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';

import { mainColor } from '@shared/stylesheets/constants';
import { options as headerOptions } from '@shared/header';
import { styles as formStyles } from '@shared/stylesheets/form';
import { styles as homeStyles } from '@shared/stylesheets/home';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = Object.assign({}, headerOptions, { title: '' });

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <View style={homeStyles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={mainColor}
                />
                <View style={homeStyles.logo}>
                    <Image
                        source={require('@assets/common/logo.png')}
                        style={{
                            width: 220,
                            resizeMode: 'contain'
                        }}
                    />
                </View>
                <View>
                    <TouchableOpacity
                        onPress={event => (this.props.navigation.navigate('Register'))}
                        style={formStyles.button}
                    >
                        <Text style={formStyles.buttonText}>register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={event => (this.props.navigation.navigate('Login'))}
                        style={formStyles.button}
                    >
                        <Text style={formStyles.buttonText}>login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);