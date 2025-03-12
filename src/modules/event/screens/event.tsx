import { View, SafeAreaView } from "react-native";
import TopBarWithTitle from "../../../components/topBarWithTitle/topBarWithTitle";
import EventBody from "../components/eventBody/eventBody";
import { strings } from "../../../res/strings/strings";
import styles from "./eventStyles";
import useEvent from "./eventHooks";


const Event: React.FC = () => {
    
    const {
        data,
        loading,
        error,
        onRefresh,
    } = useEvent();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <TopBarWithTitle title={strings.events} />
                <EventBody events={data} onRefresh={onRefresh} />
            </View>
        </SafeAreaView>
    );
};

export default Event;
