import { colors } from "../../../res/colors/colors";
import ProfileBody from "../components/profileBody";
import ProfileHeader from "../components/profileHeader";
import { StyleSheet, ScrollView } from "react-native";

const Profile: React.FC = ({ navigation }: any) => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
        >
            <ProfileHeader />
            <ProfileBody navigation={navigation} />
        </ScrollView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    }
});
