import { TextInput, StyleSheet, TextInputProps, Text, View } from 'react-native';
import styles from './customTextInputStyles';

interface CustomTextInputProps extends TextInputProps {
    textTitle: string;
    label: string;
    inputType: 'email' | 'password' | 'text' | 'number';
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
    onErrorClear?: () => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    textTitle,
    label,
    inputType,
    value,
    onChangeText,
    error,
    onErrorClear,
    ...rest
}) => {
    let keyboardType: TextInputProps['keyboardType'] = 'default';
    let secureTextEntry = false;

    if (inputType === 'email') {
        keyboardType = 'email-address';
    } else if (inputType === 'number') {
        keyboardType = 'numeric';
    } else if (inputType === 'password') {
        secureTextEntry = true;
    }

    const handleChangeText = (text: string) => {
        if (onErrorClear) {
            onErrorClear();
        }
        onChangeText(text);
    };

    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.textTitle, error && styles.errorText]}>{textTitle}</Text>
            <TextInput
                style={[styles.inputText, error && styles.errorBorder]}
                placeholder={label}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={handleChangeText}
                {...rest} 
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

export default CustomTextInput;