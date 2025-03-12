import { SafeAreaView } from "react-native-safe-area-context";
import ToolbarWithTitle from "../../../components/toolBarWithTitle/ToolbarWithTitle";
import { View, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import RegisterBody from "../components/registerBody/registerBody";
import { strings } from "../../../res/strings/strings";
import styles from "./registerStyles";

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
