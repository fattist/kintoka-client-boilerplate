import { StyleSheet } from 'react-native';

import { mainColor } from '@shared/stylesheets/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'space-between',
        alignItems: 'center',
        backgroundColor: mainColor,
    }
})

export {
    styles
}