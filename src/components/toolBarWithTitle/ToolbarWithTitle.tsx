import { View, Text, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import styles from "./toolbarWithTitleStyles";
import { colors } from "../../res/colors/colors";

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
                    <Path d="M15 18l-6-6 6-6" stroke={colors.light} strokeWidth={2} />
                </Svg>
            </TouchableOpacity>
            <Text style={styles.title}>{children}</Text>
            <View style={{ width: 30 }} />
        </View>
    );
};

export default ToolbarWithTitle;
