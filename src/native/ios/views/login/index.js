import React, { Component } from 'react';
import Auth0 from 'react-native-auth0';
import Config from 'react-native-config';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import * as s from '@selectors/auth0'

class login extends Component {
  constructor(props) {
    super(props);

    this.auth0 = new Auth0({ domain: Config.AUTH0_DOMAIN, clientId: Config.AUTH0_CLIENT_ID });
    this.prompt = this.prompt.bind(this);
  }

  componentDidMount() {
    SplashScreen.hide();

    console.log(this.props, 'props');
    if (!this.props.authenticated) {
      this.prompt();
    }
  }

  prompt() {
    this.auth0.webAuth.authorize({
      scope: 'openid profile email',
      audience: `https://${Config.AUTH0_DOMAIN}/userinfo`
    }).then(response =>
      this.props.handler(response, s.AUTH0_SUCCESS)
    ).catch(error =>
      this.props.handler(error, s.AUTH0_ERROR)
    );
  }

  render() {
   return null;
  }
}

const mapStateToProps = ({ auth0 }) => ({ authenticated: auth0.authenticated });
const mapDispatchToProps = dispatch => ({
  handler: (payload, selector) => dispatch({
    type: `event_${selector}`,
    response: payload
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(login);