import { StyleSheet, View, FlatList, Text } from "react-native";
import EventFilterItem from '../../../components/eventFilterItem';
import EmptyState from "../../../components/EmptyState";
import EventItem from "../../../components/eventItem";
import { strings } from "../../../res/strings/strings";
import { Event } from "../../../models/eventEntity";

const FilterItem = [
    { id: '1', text: strings.eventsFilterFintech},
    { id: '2', text: strings.eventsFilterProductivity },
    { id: '3', text: strings.eventsFilterInnovation },
    { id: '4', text: strings.eventsFilterTechnology },
];

type Events = {
    event: Event
};

const EventBody: React.FC = () => {
    const data: Events[] = []; 
    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <FlatList
                    horizontal
                    data={FilterItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <EventFilterItem text={item.text} />}
                    ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                    contentContainerStyle={styles.searchFilter}
                />
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.event.name || "defaultKey"}
                renderItem={({ item }) => (
                    <EventItem event={item.event} />
                )}
                ListEmptyComponent={<EmptyState />} 
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

export default EventBody;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    searchFilter: {
        height: 50,
    },
    filterContainer: {
        height: 50,
        marginVertical: 16,
    },
    listContainer: {
        flex: 1, 
    },
});
