import { View, ImageBackground, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./homeHeaderStyle";
import ItemAccountList from "../../../../components/itemAccountList/itemAccountList";

const data = [
    { id: '1', name: "Marcelo Donato", photo: "" },
    { id: '2', name: "João Silva", photo: "" },
    { id: '3', name: "Maria Oliveira", photo: "" },
];

const HomeHeader: React.FC = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../../../assets/background-image.png')}
                resizeMode='cover'
                style={styles.image}
            >
                <SafeAreaView style={styles.safeArea}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        horizontal
                        renderItem={({ item }) => (
                            <ItemAccountList name={item.name} photo={item.photo} />
                        )}
                        contentContainerStyle={styles.listContainer}
                    />
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default HomeHeader;


