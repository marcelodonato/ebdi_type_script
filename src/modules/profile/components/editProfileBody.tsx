import { View, StyleSheet } from "react-native";
import PrimaryButton from "../../../components/primaryButton/PrimaryButton";
import CustomTextInput from "../../../components/customTextInput/customTextInput";
import { strings } from "../../../res/strings/strings";
import { useEffect, useState } from "react";
import { User } from "../../../models/userEntity";
import EditPhoto from "../../../components/editPhoto/editPhoto";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { Timestamp } from "firebase/firestore"; 

const EditProfileBody: React.FC = () => {

    const userData = useSelector((state: RootState) => state.user.userData);

    const [user, setUser] = useState<User>({
        name: '',
        email: '',
        company: '',
        position: '',
        password: '',
        birth_date: null,
        disc: '',
        city: '',
        state: '',
        phone: '',
        linkedin: '',
        profile_image: '',
        site: '',
    });

    const [loading, setLoading] = useState<boolean>(false);

    useEffect (() => {
        if(userData) {
            setUser({
                ...userData,
                birth_date: userData.birth_date instanceof Timestamp ? userData.birth_date.toDate() : null, 
            });
        }
    }, [userData]);


    return (
        <>
            <View>
                <View style={styles.photoContauner}>
                    <EditPhoto />
                </View>
                <CustomTextInput
                    textTitle={strings.name}
                    label={strings.registerNamePlaceholder}
                    inputType="text"
                    value={user.name}
                    onErrorClear={() => { }}
                    onChangeText={(text) => setUser((prev) => ({ ...prev, name: text }))}
                />
                <CustomTextInput
                    textTitle={strings.birthDate}
                    label={strings.birthDateLabel}
                    inputType="text"
                    value={user.birth_date ? user.birth_date.toLocaleDateString() : ""}
                    onErrorClear={() => { }}
                    onChangeText={(text) => setUser((prev) => ({ ...prev, birth_date: new Date(text) }))}
                />
                <CustomTextInput
                    textTitle={strings.city}
                    label={strings.cityLabel}
                    inputType="text"
                    value={user.city || ""}
                    onErrorClear={() => { }}
                    onChangeText={(text) => setUser((prev) => ({ ...prev, city: text }))}
                />
                <CustomTextInput
                    textTitle={strings.state}
                    label={strings.stateLabel}
                    inputType="text"
                    value={user.state || ""}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onErrorClear={() => { }}
                    onChangeText={(text) => setUser((prev) => ({ ...prev, state: text }))}
                />
                <CustomTextInput
                    textTitle={strings.phone}
                    label={strings.phoneLabel}
                    inputType="text"
                    value={user.phone || ""}
                    onErrorClear={() => { }}
                    onChangeText={(text) => setUser((prev) => ({ ...prev, phone: text }))}
                />
                 <CustomTextInput
                    textTitle={strings.company}
                    label={strings.companyLabel}
                    inputType="text"
                    value={user.company}
                    onErrorClear={() => { }}
                    onChangeText={(text) => setUser((prev) => ({ ...prev, company: text }))}
                />
                 <CustomTextInput
                    textTitle={strings.position}
                    label={strings.registerPositionPlaceholder}
                    inputType="text"
                    value={user.position}
                    onErrorClear={() => { }}
                    onChangeText={(text) => setUser((prev) => ({ ...prev, position: text }))}
                />
                 <CustomTextInput
                    textTitle={strings.linkedin}
                    label={strings.linkedinLabel}
                    inputType="text"
                    value={user.linkedin || ""}
                    onErrorClear={() => { }}
                    onChangeText={(text) => setUser((prev) => ({ ...prev, linkedin: text }))}
                />
                 <CustomTextInput
                    textTitle={strings.instagram}
                    label={strings.instagramLabel}
                    inputType="text"
                    value={user.password}
                    onErrorClear={() => { }}
                    onChangeText={(text) => setUser((prev) => ({ ...prev, name: text }))}
                />
                 <CustomTextInput
                    textTitle={strings.site}
                    label={strings.siteLabel}
                    inputType="text"
                    value={user.site || ""}
                    onErrorClear={() => { }}
                    onChangeText={(text) => setUser((prev) => ({ ...prev, site: text }))}
                />
                
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        onPress={() => { }}>{loading ? "Carregando..." : "Confirmar"}</PrimaryButton>
                </View>
            </View>
        </>
    )
};

export default EditProfileBody;

const styles = StyleSheet.create({
    photoContauner: {
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 32,
    }
});