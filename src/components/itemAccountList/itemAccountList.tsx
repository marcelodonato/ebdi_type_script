import { View, Text, Image } from "react-native";
import styles from "./itemAccountListStyles";

interface itemProps {
    photo: string;
    name: string;
}

const ItemAccountList: React.FC<itemProps> = ({ photo, name }) => {
    const placeholderImage = require("../../../assets/favicon.png");

    return (
        <View style={styles.itemContainer}>
            <View style={styles.imgContainer}>
                <Image
                    source={photo ? { uri: photo } : placeholderImage}
                    style={styles.image}
                />
            </View>
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

export default ItemAccountList;
