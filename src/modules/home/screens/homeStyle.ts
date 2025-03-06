import { StyleSheet } from "react-native";
import { colors } from "../../../res/colors/colors";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.light,
        position: "relative",
    },
    scrollView: {
        flex: 1,
        backgroundColor: colors.light,
    },
    swiperWrapper: {
        position: "relative",
        zIndex: 10,
        paddingHorizontal: 22,
        transform: [{ translateY: -100 }],
    },
    homeBodyContainer: {
        transform: [{ translateY: -70 }],
    },
    errorText: {
        color: "red",
        textAlign: "center",
        marginTop: 20,
    },
});

export default styles;
