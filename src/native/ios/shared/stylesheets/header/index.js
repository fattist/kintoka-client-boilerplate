import { StyleSheet } from 'react-native';

import { mainColor } from '@shared/stylesheets/constants';

const backgroundColor = mainColor;
const borderBottomColor = mainColor;
const borderBottomWidth = 0;
const fontSize = 18;
const tintColor = '#fff';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainColor,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: fontSize,
        textAlign: 'center',
        color: '#f5fcff'
    }
})

export {
    backgroundColor,
    borderBottomColor,
    borderBottomWidth,
    fontSize,
    styles,
    tintColor
}