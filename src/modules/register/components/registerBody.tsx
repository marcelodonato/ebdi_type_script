import { View, StyleSheet } from "react-native";
import CustomTextInput from "../../../components/customTextInput";
import { useState } from "react";
import PrimaryButton from "../../../components/PrimaryButton";
import { strings } from "../../../res/strings/strings";
import { User } from "../../../models/userEntity";
import { createUser } from "../../../actions/registerUserAction";
import { isValidEmail } from "../../../utils/validationsUtils";

interface LoginBodyProps {
    navigation: any;
}

const RegisterBody: React.FC<LoginBodyProps> = ({ navigation }) => {
    const [user, setUser] = useState<User>({
        name: '',
        email: '',
        company: '',
        position: '',
        password: ''
    });
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = (field: keyof User, value: string) => {
        setUser((prevUser) => ({
            ...prevUser,
            [field]: value
        }));
    };

    const handleSubmit = async () => {
        let newErrors: { [key: string]: string } = {};

        if (!user.name) {
            newErrors.name = strings.nameEmptyError;
        }
        if (!user.company) {
            newErrors.company = strings.companyEmptyError;
        }
        if (!user.position) {
            newErrors.position = strings.positionEmptyError;
        }
        if (!user.email) {
            newErrors.email = strings.emailEmptyError;
        } else if (!isValidEmail(user.email)) {
            newErrors.email = strings.registerEmailValidation;
        }
        if (!user.password) {
            newErrors.password = strings.passwordEmptyError;
        }
        if (!confirmPassword) {
            newErrors.confirmPassword = strings.confirmePasswordEmptyError;
        }
        if (user.password !== confirmPassword) {
            newErrors.confirmPassword = strings.registerConfirmPasswordError;
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                setLoading(true);
                await createUser(user.email, user.password, user);
                alert('Usuário registrado com sucesso!');
                clearAllInputs();
                navigation.navigate('Login');
            } catch (error: any) {
                alert('Erro ao criar o usuário. Tente novamente!');
                console.log(error.message)
            } finally {
                setLoading(false);
            }
        }
    };

    const clearError = (field: string) => {
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[field];
            return newErrors;
        });
    };

    const clearAllInputs = () => {
        setUser({
            name: '',
            email: '',
            company: '',
            position: '',
            password: ''
        });
        setConfirmPassword('');
    };
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

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 32
    }
});
