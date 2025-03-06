import { StyleSheet, View, FlatList, RefreshControl } from "react-native";
import EventFilterItem from '../../../components/eventFilterItem';
import EmptyState from "../../../components/EmptyState";
import EventItem from "../../../components/eventItem";
import { strings } from "../../../res/strings/strings";
import { Event } from "../../../models/eventEntity";
import { useState, useCallback } from "react";

const FilterItem = [
    { id: '1', text: strings.eventsFilterFintech },
    { id: '2', text: strings.eventsFilterProductivity },
    { id: '3', text: strings.eventsFilterInnovation },
    { id: '4', text: strings.eventsFilterTechnology },
];

type Events = {
    events: Event[] | null;
    onRefresh: () => void;
};

const EventBody: React.FC<Events> = ({ events, onRefresh }) => {
    const data: Events[] = [];

    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = useCallback(async () => {
        setRefreshing(true);
        await onRefresh();
        setRefreshing(false);
    }, [onRefresh]);

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 6,
    },
    searchFilter: {
        height: 50,
    },
    filterContainer: {
        height: 50,
        marginVertical: 16,
    },
    listContainer: {
        flexGrow: 1, 
        paddingBottom: 20, 
    },
    columnWrapper: {
        justifyContent: "space-between",
        alignItems: "stretch", 
        marginBottom: 10, 
    },
});

