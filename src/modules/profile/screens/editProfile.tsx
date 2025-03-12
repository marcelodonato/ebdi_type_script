import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ToolbarWithTitle from "../../../components/toolBarWithTitle/ToolbarWithTitle";
import { colors } from "../../../res/colors/colors";
import EditProfileBody from "../components/editProfileBody";

const EditProfile: React.FC = () => {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={[styles.safeArea, { paddingTop: insets.top }]}>
            <View style={styles.container}>
                <ToolbarWithTitle>Editar Perfil</ToolbarWithTitle>
                <ScrollView
                    contentContainerStyle={styles.registerBodyContainer}
                    keyboardShouldPersistTaps="handled"
                >
                    <EditProfileBody />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.light,
    },
    container: {
        flex: 1,
    },
    registerBodyContainer: {
        flexGrow: 1,
        justifyContent: "flex-start",
        marginHorizontal: 24,
        paddingBottom: 16,
    },
});
