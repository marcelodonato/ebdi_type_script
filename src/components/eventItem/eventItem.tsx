import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../../res/colors/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Event } from "../../models/eventEntity";
import { Timestamp } from "firebase/firestore";
import styles from "./eventItemStyles";

interface EventItemProps {
    event?: Event;
}

const EventItem: React.FC<EventItemProps> = ({ event = null }) => {

    const placeholderImage = require("../../../assets/banner.png");

    let startDate = "N/A";
    if (event?.start_date) {
        if (event.start_date instanceof Timestamp) {
            startDate = event.start_date.toDate().toLocaleDateString();
        } else if (typeof event.start_date === "string") {
            startDate = event.start_date;
        } else {
            startDate = "Invalid Date";
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={event?.event_photo_link ? { uri: event?.event_photo_link } : placeholderImage}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.textTitle} numberOfLines={2}>{event?.name}</Text>
                <View style={styles.rowContainer}>
                    <Ionicons name="calendar-outline" size={16} color={colors.black} />
                    <Text style={styles.text} numberOfLines={2}>{startDate}</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Ionicons name="location-outline" size={16} color={colors.black} />
                    <Text style={styles.text} numberOfLines={2}>{event?.city}</Text>
                </View>
            </View>
        </View>
    );
};

export default EventItem;
