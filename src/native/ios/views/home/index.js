import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        SplashScreen.hide();

        if (!this.props.authenticated) {
            this.props.navigation.navigate('Login');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4F6D7A"
                />
                <Text style={styles.header}>
                    Kintoka
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4F6D7A',
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#F5FCFF',
    }
});

const mapStateToProps = ({ auth0 }) => ({ authenticated: auth0.authenticated });
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);