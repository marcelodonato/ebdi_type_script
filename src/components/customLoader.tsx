import { ActivityIndicator, View, StyleSheet } from "react-native";
import { colors } from "../res/colors/colors";

const CustomLoader = () => {
    return (
        <View style={styles.overlay}>
            <ActivityIndicator size="large" color={colors.darkBlue} />
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default CustomLoader;
