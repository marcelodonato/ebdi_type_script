import { StyleSheet } from "react-native";
import { colors } from "../../../../res/colors/colors";

const styles = StyleSheet.create({
    container: {
    },
    Image: {
        width: "100%",
        height: 200,
    },
    ContainerDate: {
        position: 'absolute',
        right: 20,
        top: 145,
        width: 100,
        height: 110,
        paddingHorizontal: 25,
        borderRadius: 8,
        backgroundColor: colors.darkBlue,
        borderWidth: 2,
        borderColor: colors.light,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        width: 200,
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 16,
        marginStart: 8
    },
    textDate: {
        color: colors.light,
        textAlign: 'center',
        fontSize: 18, 
        lineHeight: 30,
        fontWeight: 'bold'
      },
      dateWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
      }
});

export default styles;