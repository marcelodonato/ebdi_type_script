import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "./components/homeHeader";

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
      backgroundColor: '#ffffff',
      alignItems: 'center',
   }
});