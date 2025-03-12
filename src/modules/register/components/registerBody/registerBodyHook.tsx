import { useState } from "react";
import { strings } from "../../../../res/strings/strings";
import { User } from "../../../../models/userEntity";
import { createUser } from "../../../../actions/registerUserAction";
import { isValidEmail } from "../../../../utils/validationsUtils";


const useRegisterBody = (navigation: any) => {
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
            setConfirmPassword('');
        };


        return {
            user,
            confirmPassword,
            errors,
            loading,
            handleInputChange,
            setConfirmPassword,
            clearError,
            handleSubmit
        };

}

export default useRegisterBody;