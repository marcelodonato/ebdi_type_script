import { View, ScrollView, Text, RefreshControl } from "react-native";
import HomeHeader from "../components/homeHeader/homeHeader";
import CustomSwiper from "../../../components/customSwiper/CustomSwiper";
import HomeBody from "../components/homeBody/homeBody";
import CustomLoader from "../../../components/customLoader/customLoader";
import useHome from "./homeHooks";
import HomeStyle from "./homeStyle"

const carouselData = [
    { id: "1", uri: require("../../../../assets/banner.png") },
    { id: "2", uri: require("../../../../assets/banner.png") },
    { id: "3", uri: require("../../../../assets/banner.png") },
];

const Home: React.FC = () => {

    const {
        data,
        loading,
        error,
        refreshing,
        onRefresh,
    } = useHome();

    return (
        <View style={HomeStyle.container}>
            {loading && <CustomLoader />}
            <ScrollView
                style={HomeStyle.scrollView}
                contentContainerStyle={HomeStyle.container}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <HomeHeader />
                <View style={HomeStyle.swiperWrapper}>
                    <CustomSwiper data={carouselData} />
                </View>
                <View style={HomeStyle.homeBodyContainer}>
                    <HomeBody events={data} />
                </View>
            </ScrollView>

            {error && <Text style={HomeStyle.errorText}>Error: {error}</Text>}
        </View>
    );
};

export default Home;

