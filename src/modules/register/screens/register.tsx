import { SafeAreaView } from "react-native-safe-area-context";
import ToolbarWithTitle from "../../../components/toolBarWithTitle/ToolbarWithTitle";
import { View, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import RegisterBody from "../components/registerBody";
import { colors } from "../../../res/colors/colors";
import { strings } from "../../../res/strings/strings";


const Register: React.FC = ({ navigation }: any) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <ToolbarWithTitle>{strings.register}</ToolbarWithTitle>
                    <ScrollView
                        contentContainerStyle={styles.registerBodyContainer}
                        keyboardShouldPersistTaps="handled"
                    >
                        <RegisterBody navigation={navigation} />
                    </ScrollView>
                </View>
            </SafeAreaView>

            <StatusBar style="dark" />
        </>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light
    },
    registerBodyContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        marginHorizontal: 24,
        paddingBottom: 16,
    }
});
