import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../res/colors/colors";

interface itemProps {
    photo: string;
    name: string;
}

const ItemAccountList: React.FC<itemProps> = ({ photo, name }) => {
    const placeholderImage = require("../../assets/favicon.png");

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

const styles = StyleSheet.create({
    itemContainer: {
        marginRight: 16,
        alignItems: 'center',
    },
    imgContainer: {
        width: 30,
        height: 30,
        borderRadius: 30,
        overflow: "hidden", 
        marginBottom: 5,  
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover", 
    },
    name: {
        fontSize: 14,
        color: colors.light,
        textAlign: "center",  
        flexWrap: "wrap", 
        maxWidth: 80, 
    },
});
