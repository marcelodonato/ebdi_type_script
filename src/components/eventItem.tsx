import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../res/colors/colors";
import Ionicons from "react-native-vector-icons/Ionicons";


interface EventItemProps {
    photo: string;
    name: string;
    date?: string;
    city?: string;
}

const EventItem: React.FC<EventItemProps> = ({photo, name, date = null, city = null}) => {
    const placeholderImage = require("../../assets/banner.png");
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={photo ? { uri: photo } : placeholderImage}
                    style={styles.image}
                />
               <View style={styles.textContainer}>
               <Text style={styles.textTitle} numberOfLines={2}>{name}</Text>
               <View style={styles.rowContainer}>
               <Ionicons name="calendar-outline" size={16} color={colors.black} />
               <Text style={styles.text} numberOfLines={2}>{date}</Text>
               </View>
               <View style={styles.rowContainer}>
               <Ionicons name="location-outline" size={16} color={colors.black}  />
               <Text style={styles.text} numberOfLines={2}>{city}</Text>
               </View>
               </View>
            </View>
        </>
    )
};

export default EventItem;

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 230,
        borderColor: colors.black,
        borderRadius: 8,
        borderWidth: 1,
        marginEnd: 16,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '50%',
        borderTopEndRadius: 8,
        borderTopStartRadius: 8
    },
    textContainer: {
        padding: 6
    },
    textTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6
    },
    text: {
        fontSize: 16,
        marginStart: 6
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        paddingHorizontal: 6,

    }

});
