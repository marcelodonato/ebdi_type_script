import PrimaryButton from "../../../../components/primaryButton/PrimaryButton";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../../../store/store";
import { View, Text } from "react-native";
import CustomTextInput from "../../../../components/customTextInput/customTextInput";
import { strings } from "../../../../res/strings/strings";
import { loginUser } from "../../../../store/authStore";
import styles from "./loginBodyStyles";

interface LoginBodyProps {
    navigation: any;
}

const LoginBody: React.FC<LoginBodyProps> = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();

    const onClickButton = async () => {
        let newErrors: { [key: string]: string } = {};

        if (!userEmail) {
            newErrors.email = strings.emailEmptyError;
        }
        if (!userPassword) {
            newErrors.password = strings.passwordEmptyError;
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setLoading(true);

            try {
                await dispatch(loginUser({ email: userEmail, password: userPassword })).unwrap();
                setUserEmail("");
                setUserPassword("");
                setLoading(false);
                console.log("sucesso")

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }]
                })


            } catch (error: any) {
                setLoading(false);
                setErrors({
                    general: error.message || "Erro ao fazer login. Tente novamente."
                });
                console.log(errors.general)
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

    return (
        <View style={styles.container}>
            <CustomTextInput
                textTitle={strings.email}
                label={strings.loginEmailPlaceholder}
                inputType="email"
                autoCapitalize="none"
                value={userEmail}
                keyboardType="email-address"
                error={errors.email}
                onErrorClear={() => clearError("email")}
                onChangeText={setUserEmail}
            />
            <CustomTextInput
                textTitle={strings.password}
                label={strings.loginPasswordPlaceholder}
                inputType="password"
                value={userPassword}
                error={errors.password}
                onErrorClear={() => clearError("password")}
                onChangeText={setUserPassword}
            />
            <View style={styles.forgetPasswordContainer}>
                <Text style={styles.textNotClicable}>{strings.loginChangePassword}</Text>
                <Text style={styles.textClicable}>{strings.clickHere}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={onClickButton}>
                    {loading ? "Carregando..." : strings.buttonText}
                </PrimaryButton>
            </View>
        </View>
    );
};

export default LoginBody;


