import { View, Image, StyleSheet } from "react-native";
import { colors } from "../res/colors/colors";

interface SponsorProps {
    image: string
} 

const SponsorItem: React.FC<SponsorProps> = ({image}) => {
    const placeholderImage = require("../../assets/favicon.png");
    return(
        <>
        <View style={styles.container}>
            <Image style={styles.image} source={image ? { uri: image } : placeholderImage} />
        </View>
        </>
    )
};

export default SponsorItem;

const styles = StyleSheet.create({
    container : {
        width: 130,
        height: 90,
        borderRadius: 8,
        borderColor: colors.lightGray,
        marginEnd: 8,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
    }
});