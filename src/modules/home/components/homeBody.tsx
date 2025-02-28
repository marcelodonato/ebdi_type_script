import { View, Text, FlatList, StyleSheet } from "react-native";
import { colors } from "../../../res/colors/colors";
import EventItem from "../../../components/eventItem";
import ItemAccountList from "../../../components/itemAccountList";
import SponsorItem from "../../../components/sponsorItem";
import { strings } from "../../../res/strings/strings";

const data = [
    { id: '1', name: "Marcelo Donato", photo: "" },
    { id: '2', name: "João Silva", photo: "" },
    { id: '3', name: "Maria Oliveira", photo: "" },

];

const HomeBody: React.FC = () => {
    return (
        <View style={styles.container}>
            <Section title={strings.nextEvents}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <EventItem name={item.name} photo={item.photo} />}
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

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 0,
        paddingBottom: 30,
    },
    section: {
        marginBottom: 20,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black,
    },
    seeAll: {
        fontSize: 14,
    
    },
    listContainer: {
        flexDirection: 'row',
    },
});
