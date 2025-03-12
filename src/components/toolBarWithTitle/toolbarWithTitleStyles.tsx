import { StyleSheet } from "react-native";
import { colors } from "../../res/colors/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 60,
        paddingHorizontal: 16,
    },
    containerButton: {
        width: 30,
        height: 30,
        backgroundColor: colors.black,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: colors.black,
    },
});

export default styles;