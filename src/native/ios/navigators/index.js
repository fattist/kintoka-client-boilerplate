import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import auth0 from '@navigators/auth0';
import landing from '@navigators/home';
import profile from '@navigators/profile';
import register from '@navigators/register';

export default createAppContainer(createSwitchNavigator(
    {
        Home: landing,
        Login: auth0,
        Profile: profile,
        Register: register
    },
    {
        initialRouteName: 'Home',
    }
));