import PrimaryButton from "../../../../components/PrimaryButton";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomTextInput from "../../../../components/customTextInput";
import { strings } from "../../../../res/strings/strings";
import { colors } from "../../../../res/colors/colors";
import { authActions } from "../../../../actions/authActions";

interface LoginBodyProps {
    navigation: any;
}

const LoginBody: React.FC<LoginBodyProps> = ( {navigation}) => {
    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState<boolean>(false);

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
                const user = await authActions.login(userEmail, userPassword);
                setUserEmail("");
                setUserPassword("");
                setLoading(false);
                console.log("sucesso")

                navigation.reset({
                    index: 0,
                    routes: [{name: 'Home'}]
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
                label="Digite seu e-mail"
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
                label="Digite sua senha"
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

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        width: '85%',
    },
    inputText: {
        height: 50,
        borderWidth: 1,
        marginTop: 6,
        borderColor: colors.lightGray,
        borderRadius: 8,
        paddingStart: 16,
    },
    inputContainer: {
        marginTop: 16,
    },
    buttonContainer: {
        marginTop: 24,
    },
    forgetPasswordContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textNotClicable: {
        color: colors.gray,
        fontWeight: "bold",
    },
    textClicable: {
        marginStart: 6,
        color: colors.black,
        fontWeight: "bold",
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },
});
