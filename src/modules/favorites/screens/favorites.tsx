import React from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";
import TopBarWithTitle from "../../../components/topBarWithTitle/topBarWithTitle";
import EmptyState from "../../../components/emptyState/EmptyState";
import { strings } from "../../../res/strings/strings";
import styles from "./favoritesStyles";

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
