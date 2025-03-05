import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text, RefreshControl } from "react-native";
import HomeHeader from "../components/homeHeader";
import { colors } from "../../../res/colors/colors";
import CustomSwiper from "../../../components/CustomSwiper";
import HomeBody from "../components/homeBody";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchHomeData } from "../../../store/homeSotre";
import CustomLoader from "../../../components/customLoader";

const carouselData = [
    { id: "1", uri: require("../../../../assets/banner.png") },
    { id: "2", uri: require("../../../../assets/banner.png") },
    { id: "3", uri: require("../../../../assets/banner.png") },
];

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.home);
    const [refreshing, setRefreshing] = useState(false);


    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

    const onRefresh = async () => {
        setRefreshing(true);
        await dispatch(fetchHomeData());
        setRefreshing(false);
    };

    return (
        <View style={styles.container}>
            {loading && <CustomLoader />}
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing ={refreshing} onRefresh={onRefresh} />
                }
            >
                <HomeHeader />
                <View style={styles.swiperWrapper}>
                    <CustomSwiper data={carouselData} />
                </View>
                <View style={styles.homeBodyContainer}>
                    <HomeBody events={data} />
                </View>
            </ScrollView>

            {error && <Text style={styles.errorText}>Error: {error}</Text>}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.light,
        position: "relative",
    },
    scrollView: {
        flex: 1,
        backgroundColor: colors.light,
    },
    swiperWrapper: {
        position: "relative",
        zIndex: 10,
        paddingHorizontal: 22,
        transform: [{ translateY: -100 }],
    },
    homeBodyContainer: {
        transform: [{ translateY: -70 }],
    },
    errorText: {
        color: "red",
        textAlign: "center",
        marginTop: 20,
    },
});
