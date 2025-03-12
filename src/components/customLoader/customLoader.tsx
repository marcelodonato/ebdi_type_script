import { ActivityIndicator, View, StyleSheet } from "react-native";
import { colors } from "../../res/colors/colors";
import styles from "./customLoaderStyles";

const CustomLoader = () => {
    return (
        <View style={styles.overlay}>
            <ActivityIndicator size="large" color={colors.darkBlue} />
        </View>
    );
};

export default CustomLoader;