import { StyleSheet } from "react-native";
import { colors } from "../../res/colors/colors";

const styles = StyleSheet.create({
    container : {
        width: 130,
        height: 90,
        borderRadius: 8,
        borderColor: colors.lightGray,
        marginEnd: 8,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
    }
});

export default styles;