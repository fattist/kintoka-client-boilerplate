import { StyleSheet } from 'react-native';

import { mainColor } from '@shared/stylesheets/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainColor,
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginBottom: '25%'
    }
})

export {
    styles
}