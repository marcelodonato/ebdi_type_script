import { colors } from "../../res/colors/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20, 
    },
    animation: {
        width: 250, 
        height: 250,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginTop: 10,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 14,
        color: colors.darkGray,
        textAlign: "center",
        marginTop: 5,
    },
});

export default styles;