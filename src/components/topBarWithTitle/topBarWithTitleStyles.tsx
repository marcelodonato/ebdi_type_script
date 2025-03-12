import { StyleSheet } from "react-native";
import { colors } from "../../res/colors/colors";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.light
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default styles;