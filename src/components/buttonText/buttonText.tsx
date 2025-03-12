import { Text, Pressable, GestureResponderEvent } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../res/colors/colors";
import styles from "./buttonTextStyles";


interface ButtonTextProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    textIconColor?: string;
}

const ButtonText: React.FC<ButtonTextProps> = ({ title, onPress, textIconColor = colors.darkGray }) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={[styles.text, { color: textIconColor }]}>{title}</Text>
            <Ionicons name="chevron-forward-outline" size={20} color={textIconColor} />
        </Pressable>
    );
};

export default ButtonText;
