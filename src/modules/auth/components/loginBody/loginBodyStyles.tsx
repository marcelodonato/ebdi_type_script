import { StyleSheet } from "react-native";
import { colors } from "../../../../res/colors/colors";

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        width: '85%',
    },
    inputText: {
        height: 50,
        borderWidth: 1,
        marginTop: 6,
        borderColor: colors.lightGray,
        borderRadius: 8,
        paddingStart: 16,
    },
    inputContainer: {
        marginTop: 16,
    },
    buttonContainer: {
        marginTop: 24,
    },
    forgetPasswordContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textNotClicable: {
        color: colors.gray,
        fontWeight: "bold",
    },
    textClicable: {
        marginStart: 6,
        color: colors.black,
        fontWeight: "bold",
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },
});

export default styles;