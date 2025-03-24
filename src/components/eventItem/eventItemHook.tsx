import { useNavigation } from "@react-navigation/native";
import { Timestamp } from "firebase/firestore";
import { Event } from "../../models/eventEntity";
import { StackNavigationProp } from "@react-navigation/stack";

export const useEventItem = (event?: Event) => {
    const navigation = useNavigation<StackNavigationProp<any>>();

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

    const handlePress = () => {
        if (event) {
            navigation.navigate("EventDetails", { event });
        }
    };

    return { startDate, handlePress };
};
