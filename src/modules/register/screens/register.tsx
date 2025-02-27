import { SafeAreaView } from "react-native-safe-area-context";
import ToolbarWithTitle from "../../../components/ToolbarWithTitle";
import { View, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import RegisterBody from "../components/registerBody";

const Register: React.FC = ({ navigation }: any) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <ToolbarWithTitle>Cadastro</ToolbarWithTitle>
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
    },
    registerBodyContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        marginHorizontal: 24,
        paddingBottom: 16,
    }
});
