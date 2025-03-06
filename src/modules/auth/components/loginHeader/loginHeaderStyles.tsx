import { StyleSheet } from "react-native";
import { colors } from "../../../../res/colors/colors";

const styles = StyleSheet.create({
    imageBackground: {
        justifyContent: 'center',
        flex: 1,
    },

    container: {
        width: '100%',
        height: '25%',
        backgroundColor: colors.black
    },
    image: {
        marginTop: 8,
        marginStart: 16,
        width: '20%',
        height: 30
    },
    textTitle: {
        marginStart: 16,
        marginTop: 38,
        color: colors.light,
        fontWeight: 'bold',
        fontSize: 22,
    },
    textSubTitle: {
        marginStart: 16,
        color: colors.light
    }
});

export default styles;