import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator, Text } from "react-native";
import HomeHeader from "../components/homeHeader";
import { colors } from "../../../res/colors/colors";
import CustomSwiper from "../../../components/CustomSwiper";
import HomeBody from "../components/homeBody";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchHomeData } from "../../../store/homeSotre";

const carouselData = [
    { id: "1", uri: require("../../../../assets/banner.png") },
    { id: "2", uri: require("../../../../assets/banner.png") },
    { id: "3", uri: require("../../../../assets/banner.png") },
];

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.home);

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

    useEffect(() => {
        // Verificando os dados no console
        console.log("Home Data:", data);
    }, [data]);

    if (loading) {
        return <ActivityIndicator size="large" color={colors.darkBlue} style={styles.loader} />;
    }

    if (error) {
        return <Text style={styles.errorText}>Error: {error}</Text>;
    }

    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <HomeHeader />
            <View style={styles.swiperWrapper}>
                <CustomSwiper data={carouselData} />
            </View>
            <View style={styles.homeBodyContainer}>
                <HomeBody events={data} />
            </View>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.light,
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
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    errorText: {
        color: "red",
        textAlign: "center",
        marginTop: 20,
    },
});
