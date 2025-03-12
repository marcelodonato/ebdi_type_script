import { Text, View, StyleSheet } from "react-native";
import styles from "./topBarWithTitleStyles";


interface TopBarProps {
    title: string;
}

const TopBarWithTitle: React.FC<TopBarProps>  = ({title}) => {
    return(
       <>
       <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
       </View>
       </>
    )
};

export default TopBarWithTitle;

