import { StyleSheet } from "react-native";
import { colors } from "../../../../res/colors/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mediumGray,
        width: '100%',
        height: 70,
        justifyContent: 'center',
    },
    ContainerText: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textNotClicable: {
        color: colors.gray,
        fontWeight: "bold"
    },
    textClicable: {
        marginStart: 6,
        color: colors.black,
        fontWeight: "bold"
    }
});

export default styles;
