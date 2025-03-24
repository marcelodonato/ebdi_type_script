import { colors } from "../../../../res/colors/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        marginTop: 30,
        width: "100%",
        paddingHorizontal: 16
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerRow: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center'

    },
    textSubTitle: {
        fontSize: 16,
        marginStart: 6,
    },
    columnContainer: {
        flexDirection: 'column'
    },
    discContainer: {
        marginTop: 20,
    },
    button: {
        marginTop: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.black,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        fontSize: 16,
        color: colors.black,
        fontWeight: "bold",
    },
    section: {
        marginTop: 40,
        marginBottom: 40,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
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
})

export default styles;