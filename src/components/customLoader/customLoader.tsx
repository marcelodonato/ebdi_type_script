import React from "react";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../../res/colors/colors";
import styles from "./customLoaderStyles";

interface CustomLoaderProps {
    visible: boolean;
}

const CustomLoader: React.FC<CustomLoaderProps> = ({ visible }) => {
    if (!visible) return null;

    return (
        <View style={styles.overlay}>
            <ActivityIndicator size="large" color={colors.darkBlue} />
        </View>
    );
};

export default CustomLoader;
