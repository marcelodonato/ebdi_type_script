import { View, Text, Pressable, StyleSheet, GestureResponderEvent } from "react-native";
import { colors } from "../res/colors/colors";

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

const styles = StyleSheet.create({
    buttonOutterContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        width: '100%',
        height: 50
    },
    buttonInnerContainer: {
        backgroundColor: colors.black,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: colors.light,
        fontWeight: 'bold',
        fontSize: 16,
    },
    pressed: {
        opacity: 0.75
    }
});
