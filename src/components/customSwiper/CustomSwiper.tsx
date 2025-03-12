import React from "react";
import { View, ImageBackground, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./customSwiperStyles";

interface SwiperProps {
    data: { id: string; uri: any }[];
}

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