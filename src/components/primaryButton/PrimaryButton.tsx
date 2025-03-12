import { View, Text, Pressable, GestureResponderEvent } from "react-native";
import styles from "./primaryButtonStyles";

interface PrimaryButtonProps {
    children: React.ReactNode;
    onPress: (event: GestureResponderEvent) => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onPress }) => {
    return (
        <View style={styles.buttonOutterContainer}>
            <Pressable
             style={({ pressed }) => pressed
             ? [styles.buttonInnerContainer, styles.pressed]
             : styles.buttonInnerContainer}
              onPress={onPress}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;
