import { StyleSheet, View, Text, } from "react-native";
import { colors } from "../res/colors/colors";

interface SearchItemProps {
    text: string
}

const EventFilterItem: React.FC<SearchItemProps> = ({text}) => {
    return (
        <>
        <View style={styles.Container}>
            <Text>{text}</Text>
        </View>
        </>
    )
};

export default EventFilterItem;

const styles = StyleSheet.create({
Container:{
    padding: 16,
    borderRadius: 8,
    backgroundColor: colors.light
}
});