import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { AppNavigator, AuthNavigator } from './router.js';

const SwitchNavigator = createSwitchNavigator(
  {
    Login: AuthNavigator,
    App: AppNavigator
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

export default createAppContainer(SwitchNavigator);
