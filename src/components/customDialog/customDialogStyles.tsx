import { StyleSheet } from "react-native";
import { colors } from "../../res/colors/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        alignSelf: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.black,
        marginBottom: 10,
        textAlign: "center",
    },
    bodyText: {
        fontSize: 16,
        color: colors.darkGray,
        textAlign: "center",
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10,
    },
    button: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
    },
    buttonCancel: {
        backgroundColor: colors.red,
    },
    buttonConfirm: {
        backgroundColor: colors.darkBlue,
    },
    buttonTextCancel: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.light,
    },
    buttonTextConfirm: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.light,
    },
});

export default styles;