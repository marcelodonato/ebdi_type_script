import { View, ImageBackground, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../res/colors/colors";

const HomeHeader: React.FC = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../../assets/background-image.png')}
                resizeMode='cover'
                style={styles.image}>
               <SafeAreaView>
               <Text style={styles.text}> Home </Text>
               </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '30%',
        backgroundColor: colors.black,
    },
    image: {
        flex: 1,

    },
    text: {
        color: colors.light,
        fontSize: 20,
        fontWeight: 'bold',
    },
});
