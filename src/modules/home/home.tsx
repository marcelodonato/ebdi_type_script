import { StyleSheet, View, ScrollView } from "react-native";
import HomeHeader from "./components/homeHeader";
import { colors } from "../../res/colors/colors";
import CustomSwiper from "../../components/CustomSwiper";
import HomeBody from "./components/homeBody";

const carouselData = [
    { id: "1", uri: require("../../../assets/banner.png") },
    { id: "2", uri: require("../../../assets/banner.png") },
    { id: "3", uri: require("../../../assets/banner.png") },
];

const Home: React.FC = () => {
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
                <HomeBody />
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
});
