import { StyleSheet } from "react-native";
import { colors } from "../../res/colors/colors";

const styles = StyleSheet.create({
    container: {
        width: 110,
        height: 110,
        borderRadius: 100,
        backgroundColor: colors.whiteSmoke,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", 
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100, 
    },
});

export default styles;