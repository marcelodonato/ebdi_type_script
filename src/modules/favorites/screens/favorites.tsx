import React from "react";
import { View, SafeAreaView, StyleSheet, FlatList, Text } from "react-native";
import TopBarWithTitle from "../../../components/topBarWithTitle";
import EmptyState from "../../../components/EmptyState";
import { strings } from "../../../res/strings/strings";


type FavoriteItem = {
    id: string;
    name: string;
};

const Favorites: React.FC = () => {
    const data: FavoriteItem[] = [];

    return (
        <SafeAreaView style={styles.container}>
            <TopBarWithTitle title={strings.favorites} />
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
                ListEmptyComponent={<EmptyState />}
                contentContainerStyle={data.length === 0 ? styles.emptyContainer : {}}
            />
        </SafeAreaView>
    );
};

export default Favorites;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    text: {
        fontSize: 16,
        color: "#333",
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
    },
});
