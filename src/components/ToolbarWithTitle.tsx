import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors } from "../res/colors/colors";
import { useNavigation } from "@react-navigation/native";

interface ToolbarProps {
    children: React.ReactNode;
}

const ToolbarWithTitle: React.FC<ToolbarProps> = ({ children }) => {
    const navigation = useNavigation();

    function onBackPress() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerButton} onPress={onBackPress}>
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                    <Path d="M15 18l-6-6 6-6" stroke="white" strokeWidth={2} />
                </Svg>
            </TouchableOpacity>
            <Text style={styles.title}>{children}</Text>
            <View style={{ width: 30 }} />
        </View>
    );
};

export default ToolbarWithTitle;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 60,
        paddingHorizontal: 16,
    },
    containerButton: {
        width: 30,
        height: 30,
        backgroundColor: colors.black,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: colors.black,
    },
});
