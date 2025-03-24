import { FlatList, View, Text, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../../../res/colors/colors";
import { Divider } from 'react-native-paper';
import styles from "./eventDetailsBodyStyle";
import { Event } from "../../../../models/eventEntity";
import { strings } from "../../../../res/strings/strings";
import SponsorItem from "../../../../components/sponsorItem/sponsorItem";

interface EventDtailsBodyProps {
    event?: Event;
}

const data = [
    { id: '1', name: "Marcelo Donato", photo: "" },
    { id: '2', name: "João Silva", photo: "" },
    { id: '3', name: "Maria Oliveira", photo: "" },

];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <View style={styles.section}>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
        {children}
    </View>
);

const EventDetailsBody: React.FC<EventDtailsBodyProps> = ({ event }) => {

    const onPress = () => {
        console.log("cliquei")
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.textTitle}>{event?.city}</Text>
                <View style={styles.containerRow}>
                    <Ionicons name="location" size={18} color={colors.black} />
                    <Text style={styles.textSubTitle}>{event?.city}</Text>
                </View>
                <View style={styles.containerRow}>
                    <Ionicons name="calendar" size={18} color={colors.black} />
                    <View style={styles.columnContainer}>
                        <Text style={styles.textSubTitle}>minha localizacao,</Text>
                        <Text style={styles.textSubTitle}>minha localizacao,</Text>
                    </View>
                </View>
                <Divider style={{ height: 2, backgroundColor: colors.lightGray, marginVertical: 10 }} />

                <View style={styles.discContainer}>
                    <Text style={styles.textTitle}>{strings.disc}</Text>
                    <Text style={[styles.textSubTitle, { marginVertical: 8 }]}>{event?.description}</Text>
                    <Text style={styles.textTitle}>{strings.eventSchedule}</Text>
                    <Text style={[styles.textSubTitle, { marginVertical: 8 }]}>{event?.schedule}</Text>
                </View>
                <Divider style={{ height: 2, backgroundColor: colors.lightGray, marginVertical: 10 }} />

                <View style={styles.discContainer}>
                    <Text style={styles.textTitle} >{strings.rsvp}</Text>
                    <Pressable style={styles.button} onPress={onPress}>
                        <Text style={styles.textButton}>{strings.interestedButton}</Text>
                    </Pressable>
                </View>
                <Divider style={{ height: 2, backgroundColor: colors.lightGray, marginTop: 20 }} />

                <Section title={strings.sponsors}>
                    <FlatList
                        data={data}
                        horizontal
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <SponsorItem image={item.photo} />}
                        contentContainerStyle={styles.listContainer}
                    />
                </Section>

            </View>
        </>
    )
};

export default EventDetailsBody;
