import { View, StyleSheet, SafeAreaView } from "react-native";
import TopBarWithTitle from "../../../components/topBarWithTitle";
import EventBody from "../components/eventBody";
import { strings } from "../../../res/strings/strings";
import { AppDispatch, RootState } from "../../../store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "../../../store/homeSotre";
import { useState } from "react";


const Event: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.home);
    
    useEffect(() => {
        if (!data) {
            dispatch(fetchHomeData());
        }
    }, [dispatch, data]);

    const [refreshing, setRefreshing] = useState(false);

     const onRefresh = async () => {
            setRefreshing(true);
            await dispatch(fetchHomeData());
            setRefreshing(false);
        };
    

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
    },
});
