import { StyleSheet } from "react-native";
import { colors } from "../../res/colors/colors";

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 230,
        borderColor: colors.black,
        borderRadius: 8,
        borderWidth: 1,
        marginEnd: 16,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '50%',
        borderTopEndRadius: 8,
        borderTopStartRadius: 8
    },
    textContainer: {
        padding: 6
    },
    textTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6
    },
    text: {
        fontSize: 16,
        marginStart: 6
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        paddingHorizontal: 6,
    }
});

export default styles;