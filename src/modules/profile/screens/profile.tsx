import { colors } from "../../../res/colors/colors";
import { Container } from "../../auth/screens/login/styles";
import ProfileBody from "../components/profileBody";
import {SafeAreaView, View, StyleSheet, ScrollView } from "react-native";

 

const Profile: React.FC = () => {
    return(
        <>
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View>
                <ProfileBody />
            </View>
            </ScrollView>
         
        </SafeAreaView>
        </>
    )
} ;

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light
    }
})