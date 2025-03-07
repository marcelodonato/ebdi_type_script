import { StyleSheet } from "react-native";
import { colors } from "../../../res/colors/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
    },
    text: {
        fontSize: 16,
        color: colors.darkGray,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
    },
});
export default styles;