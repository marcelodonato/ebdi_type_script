import { View, Text, Pressable, StyleSheet, GestureResponderEvent } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../res/colors/colors";


interface ButtonTextProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    textIconColor?: string;
}

const ButtonText: React.FC<ButtonTextProps> = ({ title, onPress, textIconColor = colors.darkGray }) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={[styles.text, {color: textIconColor}]}>{title}</Text>
            <Ionicons name="chevron-forward-outline" size={20} color={textIconColor} />
        </Pressable>
    );
};

export default ButtonText;

const styles = StyleSheet.create({
    button: {
        flexDirection: "row", 
        alignItems: "center",
        paddingVertical: 16,
      
        justifyContent: "space-between",
        width: "100%",
        borderBottomWidth: 1,
        borderColor: colors.lightGray
    },
    text: {
        fontSize: 16,
        marginRight: 5,
    },
});
