import { StyleSheet } from "react-native";
import { colors } from "../../../../res/colors/colors";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 0,
        paddingBottom: 30,
    },
    section: {
        marginBottom: 20,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black,
    },
    seeAll: {
        fontSize: 14,

    },
    listContainer: {
        flexDirection: 'row',
        marginStart: 8
    },
});

export default styles;