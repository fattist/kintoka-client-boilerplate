import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import auth0 from '@navigators/auth0';
import landing from '@navigators/home';

export default createAppContainer(createSwitchNavigator(
    {
        Home: landing,
        Login: auth0
    },
    {
        initialRouteName: 'Home',
    }
));