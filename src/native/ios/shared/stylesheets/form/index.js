import { StyleSheet } from 'react-native';

const formElements = {
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 40,
    padding: 10,
    marginBottom: 10
}

const styles = StyleSheet.create({
    button: Object.assign({}, formElements, {
        backgroundColor: '#698996'
    }),
    buttonText: {
        color: '#faf3a0',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    input: Object.assign({}, formElements, {
        backgroundColor: '#698996',
        color: '#fff'
    }),
})

export {
    styles
}