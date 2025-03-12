import { View } from "react-native";
import CustomTextInput from "../../../../components/customTextInput/customTextInput";
import PrimaryButton from "../../../../components/primaryButton/PrimaryButton";
import { strings } from "../../../../res/strings/strings";
import styles from "./registerBodyStyles";
import useRegisterBody from "./registerBodyHook";

interface LoginBodyProps {
    navigation: any;
}

const RegisterBody: React.FC<LoginBodyProps> = ({ navigation }) => {

    const {
        user,
        confirmPassword,
        errors,
        loading,
        handleInputChange,
        setConfirmPassword,
        clearError,
        handleSubmit
    } = useRegisterBody(navigation)
 
    return (
        <View>
            <CustomTextInput
                textTitle={strings.name}
                label={strings.registerNamePlaceholder}
                inputType="text"
                value={user.name}
                error={errors.name}
                onErrorClear={() => clearError("name")}
                onChangeText={(text) => handleInputChange('name', text)}
            />
            <CustomTextInput
                textTitle={strings.company}
                label={strings.registerCompanyPlaceholder}
                inputType="text"
                value={user.company}
                error={errors.company}
                onErrorClear={() => clearError("company")}
                onChangeText={(text) => handleInputChange('company', text)}
            />
            <CustomTextInput
                textTitle={strings.position}
                label={strings.registerPositionPlaceholder}
                inputType="text"
                value={user.position}
                error={errors.position}
                onErrorClear={() => clearError("position")}
                onChangeText={(text) => handleInputChange('position', text)}
            />
            <CustomTextInput
                textTitle={strings.email}
                label={strings.registerEmailPlaceholder}
                inputType="email"
                value={user.email}
                error={errors.email}
                autoCapitalize="none"
                keyboardType="email-address"
                onErrorClear={() => clearError("email")}
                onChangeText={(text) => handleInputChange('email', text)}
            />
            <CustomTextInput
                textTitle={strings.password}
                label={strings.registerPasswordPlaceholder}
                inputType="password"
                value={user.password}
                error={errors.password}
                onErrorClear={() => clearError("password")}
                onChangeText={(text) => handleInputChange('password', text)}
            />
            <CustomTextInput
                textTitle={strings.confirmPassword}
                label={strings.registerConfirmPasswordPlaceholder}
                inputType="password"
                value={confirmPassword}
                error={errors.confirmPassword}
                onErrorClear={() => clearError("confirmPassword")}
                onChangeText={setConfirmPassword}
            />

            <View style={styles.buttonContainer}>
                <PrimaryButton
                    onPress={handleSubmit}>{loading ? "Carregando..." : "Cadastrar"}</PrimaryButton>
            </View>
        </View>
    );
};

export default RegisterBody;
