import React from "react";
import { View, ImageBackground, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

interface SwiperProps {
    data: { id: string; uri: any }[];
}

const { width } = Dimensions.get("window");

const CustomSwiper: React.FC<SwiperProps> = ({ data }) => {
    return (
        <View style={styles.swiperContainer}>
            <Swiper
                style={styles.swiper}
                showsButtons={false}
                loop
                autoplay
                autoplayTimeout={3}
                paginationStyle={{ bottom: 10 }}
            >
                {data.map((item) => (
                    <View key={item.id} style={styles.carouselItem}>
                        <ImageBackground
                            source={item.uri}
                            style={styles.carouselImage}
                            imageStyle={{ borderRadius: 10 }}
                        />
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

export default CustomSwiper;

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
