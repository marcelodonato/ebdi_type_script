import { View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../../res/colors/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Event } from "../../models/eventEntity";
import styles from "./eventItemStyles";
import { useEventItem } from "./eventItemHook";

interface EventItemProps {
    event: Event;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
    const { startDate, handlePress, formattedDate } = useEventItem(event);

    const placeholderImage = require("../../../assets/banner.png");

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Image
                source={event?.event_photo_link ? { uri: event?.event_photo_link } : placeholderImage}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.textTitle} numberOfLines={2}>{event?.name}</Text>
                <View style={styles.rowContainer}>
                    <Ionicons name="calendar-outline" size={16} color={colors.black} />
                    <Text style={styles.text} numberOfLines={2}>{formattedDate}</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Ionicons name="location-outline" size={16} color={colors.black} />
                    <Text style={styles.text} numberOfLines={2}>{event?.city}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default EventItem;
