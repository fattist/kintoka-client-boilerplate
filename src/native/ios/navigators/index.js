import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import auth0 from '@navigators/auth0';

export default createAppContainer(createSwitchNavigator(
    {
        Login: auth0
    },
    {
        initialRouteName: 'Login',
    }
));