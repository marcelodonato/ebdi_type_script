import { View, Image } from "react-native";
import styles from "./sponsorItemStyles";

interface SponsorProps {
    image: string
} 

const SponsorItem: React.FC<SponsorProps> = ({image}) => {
    const placeholderImage = require("../../../assets/favicon.png");
    return(
        <>
        <View style={styles.container}>
            <Image style={styles.image} source={image ? { uri: image } : placeholderImage} />
        </View>
        </>
    )
};

export default SponsorItem;