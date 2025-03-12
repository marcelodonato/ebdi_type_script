import { StyleSheet } from "react-native";
import { colors } from "../../res/colors/colors";

const styles = StyleSheet.create({
    itemContainer: {
        marginRight: 16,
        alignItems: 'center',
    },
    imgContainer: {
        width: 30,
        height: 30,
        borderRadius: 30,
        overflow: "hidden", 
        marginBottom: 5,  
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover", 
    },
    name: {
        fontSize: 14,
        color: colors.light,
        textAlign: "center",  
        flexWrap: "wrap", 
        maxWidth: 80, 
    },
});

export default styles;