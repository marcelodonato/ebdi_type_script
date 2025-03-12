import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    swiperContainer: {
        height: 180,
        alignSelf: "center",
        flexShrink: 1,
    },
    swiper: {
        height: "100%",
    },
    carouselItem: {
        justifyContent: "center",
        alignItems: "center",
        width: width * 0.85,
        height: 180,
        marginHorizontal: 10,
    },
    carouselImage: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
});

export default styles;