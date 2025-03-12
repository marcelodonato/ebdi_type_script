import { View, Text, } from "react-native";
import LottieView from "lottie-react-native";
import { strings } from "../../res/strings/strings";
import styles from "./emptyStateStyles";


const EmptyState: React.FC = () => {
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../../assets/emptyList.json')}
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