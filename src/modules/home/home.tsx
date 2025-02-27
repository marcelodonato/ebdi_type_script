import { StyleSheet, View } from "react-native";
import HomeHeader from "./components/homeHeader";
import { colors } from "../../res/colors/colors";


const Home: React.FC = () => {
    return (
        <>
        <View style={styles.container}>
            <HomeHeader />
        </View>
        </>
    )
};

export default Home;


const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: '100%',
      backgroundColor: colors.light,
      alignItems: 'center',
   }
});