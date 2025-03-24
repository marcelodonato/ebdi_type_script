import EventDetailsHeader from "../components/eventDetailsHeader/eventDetailsHeader";
import { SafeAreaView, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Event } from "../../../models/eventEntity";
import EventDetailsBody from "../components/eventDetailsBody/eventDetailsBody";
import { colors } from "../../../res/colors/colors";


const EventDetails: React.FC = () => {
  const route = useRoute();
  const { event } = route.params as { event: Event };

  console.log(event);

  return (
    <SafeAreaView style={{  flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.light }}>
        <EventDetailsHeader event={event} />
        <EventDetailsBody event={event} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetails;
