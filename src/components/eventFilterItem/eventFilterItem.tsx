import { View, Text, } from "react-native";
import styles from "./eventFilterItemStyles";


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