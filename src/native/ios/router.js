import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import Home from './views/home';
import Login from './views/login';
import Menu from './views/menu';

const HomeStackNavigator = createStackNavigator({
    Home: { screen: Home },
});

export const AppNavigator = createDrawerNavigator({
  Home: { screen: HomeStackNavigator },
}, {
  contentComponent: Menu,
  drawerWidth: widthPercentageToDP('100%'),
  initialRouteName: 'Home'
});

export const AuthNavigator = createStackNavigator({
    Login: { screen: Login }
}, {
    headerMode: 'none'
});