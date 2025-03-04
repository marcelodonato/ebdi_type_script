import { View, StyleSheet, SafeAreaView } from "react-native";
import TopBarWithTitle from "../../../components/topBarWithTitle";
import EventBody from "../components/eventBody";
import { strings } from "../../../res/strings/strings";

const Event: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <TopBarWithTitle title={strings.events} />
                <EventBody />
            </View>
        </SafeAreaView>
    );
};

export default Event;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
    },
});
