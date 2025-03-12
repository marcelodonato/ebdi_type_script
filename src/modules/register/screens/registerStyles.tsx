import { StyleSheet } from "react-native";
import { colors } from "../../../res/colors/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light
    },
    registerBodyContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        marginHorizontal: 24,
        paddingBottom: 16,
    }
});

export default styles;