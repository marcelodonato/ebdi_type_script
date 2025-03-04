import { Text, View, StyleSheet } from "react-native";
import { colors } from "../res/colors/colors";


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

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.light
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});