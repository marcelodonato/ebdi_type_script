import { colors } from '../../res/colors/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 16,
    },
    textTitle: {
        color: colors.black,
        fontSize: 16,
        marginBottom: 6,
    },
    inputText: {
        height: 50,
        borderWidth: 1,
        marginTop: 6,
        borderColor: colors.lightGray,
        borderRadius: 8,
        paddingStart: 16,
    },
    errorBorder: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    }
});

export default styles;