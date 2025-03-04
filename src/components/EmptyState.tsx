import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { strings } from "../res/strings/strings";
import { colors } from "../res/colors/colors";


const EmptyState: React.FC = () => {
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../assets/emptyList.json')}
                autoPlay
                loop
                style={styles.animation}
            />
            <Text style={styles.title}>{strings.emptyStateTitle}</Text>
            <Text style={styles.subtitle}>{strings.emptyStateSubTitle}.</Text>
        </View>
    );
};

export default EmptyState;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20, 
    },
    animation: {
        width: 250, 
        height: 250,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginTop: 10,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 14,
        color: colors.darkGray,
        textAlign: "center",
        marginTop: 5,
    },
});
