import { StyleSheet } from "react-native";
import { colors } from "../../res/colors/colors";

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,

        justifyContent: "space-between",
        width: "100%",
        borderBottomWidth: 1,
        borderColor: colors.lightGray
    },
    text: {
        fontSize: 16,
        marginRight: 5,
    },
});

export default styles;