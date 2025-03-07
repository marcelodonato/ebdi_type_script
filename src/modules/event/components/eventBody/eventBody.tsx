import { View, FlatList, RefreshControl } from "react-native";
import EventFilterItem from '../../../../components/eventFilterItem';
import EmptyState from "../../../../components/EmptyState";
import EventItem from "../../../../components/eventItem";
import { strings } from "../../../../res/strings/strings";
import { Event } from "../../../../models/eventEntity";
import styles from "./eventBodyStyles";
import { useEventBody } from "./eventBodyHooks";

const FilterItem = [
    { id: '1', text: strings.eventsFilterFintech },
    { id: '2', text: strings.eventsFilterProductivity },
    { id: '3', text: strings.eventsFilterInnovation },
    { id: '4', text: strings.eventsFilterTechnology },
];

type Events = {
    events: Event[] | null;
    onRefresh: () => Promise<void>;
};

const EventBody: React.FC<Events> = ({ events, onRefresh }) => {

    const { refreshing, handleRefresh } = useEventBody({ onRefresh });

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
                data={events}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <EventItem event={item} />
                )}
                ListEmptyComponent={<EmptyState />}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.listContainer}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                }
            />
        </View>
    );
};

export default EventBody;
