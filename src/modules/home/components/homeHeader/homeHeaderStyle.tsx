import { StyleSheet } from "react-native";
import { colors } from "../../../../res/colors/colors";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 250,
        backgroundColor: colors.black,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    safeArea: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: colors.light,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    listContainer: {
        flexDirection: 'row',
    },
});

export default styles; 