import { View, Text, FlatList, } from "react-native";
import EventItem from "../../../../components/eventItem";
import ItemAccountList from "../../../../components/itemAccountList";
import SponsorItem from "../../../../components/sponsorItem";
import { strings } from "../../../../res/strings/strings";
import { Event } from "../../../../models/eventEntity";
import styles from "./homeBodyStyle"

const data = [
    { id: '1', name: "Marcelo Donato", photo: "" },
    { id: '2', name: "João Silva", photo: "" },
    { id: '3', name: "Maria Oliveira", photo: "" },

];

interface homeData {
    events: Event[] | null;
}

const HomeBody: React.FC<homeData> = ({ events }) => {
    return (
        <View style={styles.container}>
            <Section title={strings.nextEvents}>
                <FlatList
                    data={events}
                    keyExtractor={(item, index) => index.toString() || 'defaultKey'}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <EventItem event={item} />}
                    contentContainerStyle={styles.listContainer}
                />
            </Section>

            <Section title={strings.ebdiNetwork}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <ItemAccountList name={item.name} photo={item.photo} />}
                    contentContainerStyle={styles.listContainer}
                />
            </Section>

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
    );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <View style={styles.section}>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.seeAll}>{strings.seeAll}</Text>
        </View>
        {children}
    </View>
);

export default HomeBody;

