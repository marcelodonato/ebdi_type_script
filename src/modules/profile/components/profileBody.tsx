import React, { useState } from "react";
import { View, StyleSheet,  } from "react-native";
import ButtonText from "../../../components/buttonText";
import { colors } from "../../../res/colors/colors";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { logoutUser } from "../../../store/authStore";
import { strings } from "../../../res/strings/strings";
import CustomDialog from "../../../components/customDialog";

interface ProfileProps {
    navigation: any;
}

const ProfileBody: React.FC<ProfileProps> = ({ navigation }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [isDialogVisible, setDialogVisible] = useState(false);

    const logout = async () => {
        try {
            await dispatch(logoutUser()).unwrap();
            console.log("Logout successful!");

            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }]
            })
        } catch (e: any) {
            console.log("Erro ao deslogar:", e.message);
        }
    };

    function onEditProfile() {
        navigation.navigate("EditProfile")
    }
    function onFavorites () {
        navigation.navigate("Favoritos")
    }

    function onClickButton() {
        console.log("meu botao");
    }

    return (
        <View style={styles.bodyContainer}>
            <View style={styles.buttonContainer}><ButtonText title={strings.editProfileButton} onPress={onEditProfile} /></View>
            <View style={styles.buttonContainer}><ButtonText title={strings.favoritesProfileButton} onPress={onFavorites} /></View>
            <View style={styles.buttonContainer}><ButtonText title={strings.termsButton} onPress={onClickButton} /></View>
            <View style={styles.buttonContainer}><ButtonText title={strings.policyButton} onPress={onClickButton} /></View>
            <View style={styles.buttonContainer}><ButtonText title={strings.deleteAccountButton} onPress={() =>setDialogVisible(true)} textIconColor={colors.red} /></View>
            <View style={styles.buttonContainer}><ButtonText title={strings.logoutButton} onPress={logout} /></View>

            <CustomDialog 
            textBody={strings.popupExcludeAccountBody}
            textDeny= {strings.cancel}
            textConfirm={strings.continue}
            title={strings.popupExcludeAccountTitle}
            onClose={() => setDialogVisible(false)}
            onConfirm={() =>setDialogVisible(false)}
            visible = {isDialogVisible}
            />
        </View>
    );
};

export default ProfileBody;

const styles = StyleSheet.create({
    bodyContainer: {
        backgroundColor: colors.light,
        padding: 16,
    },
    buttonContainer: {
        marginTop: 8,
    },
});
