import { View, Image, Text } from "react-native";
import { Event } from "../../../../models/eventEntity";
import styles from "./eventDetailsHeaderStyles";
import useEventDetails from "./eventDetailsHeaderHook";

interface EventDtailsHeaderProps {
    event?: Event;
}

const EventDetailsHeader: React.FC<EventDtailsHeaderProps> = ({ event }) => {
    const placeholderImage = require("../../../../../assets/banner.png");

    const { formattedDate } = useEventDetails(event)

    return (
        <>
            <View style={styles.container}>
                <Image
                    source={event?.event_photo_link ? { uri: event?.event_photo_link } : placeholderImage}
                    style={styles.Image}
                />

                <View style={styles.ContainerDate}>
                    <View style={styles.dateWrapper}>
                        <Text style={styles.textDate}>{formattedDate}</Text>
                    </View>
                </View>

                <Text style={styles.textTitle}>{event?.name}</Text>
            </View>
        </>
    );
};

export default EventDetailsHeader;


