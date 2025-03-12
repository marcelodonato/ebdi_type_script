import { colors } from "../../res/colors/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonOutterContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        width: '100%',
        height: 50
    },
    buttonInnerContainer: {
        backgroundColor: colors.black,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: colors.light,
        fontWeight: 'bold',
        fontSize: 16,
    },
    pressed: {
        opacity: 0.75
    }
});

export default styles;