import { View, StyleSheet } from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import CustomTextInput from "../../../components/customTextInput";
import { strings } from "../../../res/strings/strings";
import { useState } from "react";
import { User } from "../../../models/userEntity";
import EditPhoto from "../../../components/editPhoto";

const EditProfileBody: React.FC = () => {
    const [user, setUser] = useState<User>({
        name: '',
        email: '',
        company: '',
        position: '',
        password: ''
    });

    const [loading, setLoading] = useState<boolean>(false);
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
                    // error={errors.name}
                    onErrorClear={() => { }}
                    onChangeText={(text) => { }}
                />
                <CustomTextInput
                    textTitle={"Data de Nascimento"}
                    label={"Digite sua data de nascimento"}
                    inputType="text"
                    value={user.company}
                    // error={errors.name}
                    onErrorClear={() => { }}
                    onChangeText={(text) => { }}
                />
                <CustomTextInput
                    textTitle={"Cidade"}
                    label={"Digite sua cidade"}
                    inputType="text"
                    value={user.position}
                    // error={errors.name}
                    onErrorClear={() => { }}
                    onChangeText={(text) => { }}
                />
                <CustomTextInput
                    textTitle={"Estado"}
                    label={"Digite seu Estado"}
                    inputType="email"
                    value={user.email}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    // error={errors.name}
                    onErrorClear={() => { }}
                    onChangeText={(text) => { }}
                />
                <CustomTextInput
                    textTitle={"Telefone"}
                    label={"Digite seu telefone"}
                    inputType="password"
                    value={user.password}
                    // error={errors.name}
                    onErrorClear={() => { }}
                    onChangeText={(text) => { }}
                />
                 <CustomTextInput
                    textTitle={"Empresa"}
                    label={"Digite sua empresa"}
                    inputType="password"
                    value={user.password}
                    // error={errors.name}
                    onErrorClear={() => { }}
                    onChangeText={(text) => { }}
                />
                 <CustomTextInput
                    textTitle={strings.position}
                    label={strings.registerPositionPlaceholder}
                    inputType="password"
                    value={user.password}
                    // error={errors.name}
                    onErrorClear={() => { }}
                    onChangeText={(text) => { }}
                />
                 <CustomTextInput
                    textTitle={"Linkedin"}
                    label={"Digite o link do seu linkedin"}
                    inputType="password"
                    value={user.password}
                    // error={errors.name}
                    onErrorClear={() => { }}
                    onChangeText={(text) => { }}
                />
                 <CustomTextInput
                    textTitle={"Instagram"}
                    label={"Digite o link do seu instagram"}
                    inputType="password"
                    value={user.password}
                    // error={errors.name}
                    onErrorClear={() => { }}
                    onChangeText={(text) => { }}
                />
                 <CustomTextInput
                    textTitle={"Site"}
                    label={"Digite o link do seu site"}
                    inputType="password"
                    value={user.password}
                    // error={errors.name}
                    onErrorClear={() => { }}
                    onChangeText={(text) => { }}
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