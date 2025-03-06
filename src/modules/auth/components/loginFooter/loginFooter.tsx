import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { strings } from "../../../../res/strings/strings";
import styles from "./loginFooterStyles";


interface LoginFooterProps {
    navigation: any;
}

const LoginFooter: React.FC<LoginFooterProps> = ({ navigation }) => {
    return (<>

        <View style={styles.container}>
            <View style={styles.ContainerText}>
                <Text style={styles.textNotClicable}>{strings.createAccount}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.textClicable}>{strings.registerHere}</Text>
                </TouchableOpacity>              
            </View>
        </View>

    </>
    );
};

export default LoginFooter;