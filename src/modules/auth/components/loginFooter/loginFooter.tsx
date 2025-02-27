import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../../../res/colors/colors";

interface LoginFooterProps {
    navigation: any;
}

const LoginFooter: React.FC<LoginFooterProps> = ({ navigation }) => {
    return (<>

        <View style={styles.container}>
            <View style={styles.ContainerText}>
                <Text style={styles.textNotClicable}>Não possui conta ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.textClicable}>Cadastre-se</Text>
                </TouchableOpacity>              
            </View>
        </View>

    </>
    );
};

export default LoginFooter;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mediumGray,
        width: '100%',
        height: 70,
        justifyContent: 'center',
    },
    ContainerText: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textNotClicable: {
        color: colors.gray,
        fontWeight: "bold"
    },
    textClicable: {
        marginStart: 6,
        color: colors.black,
        fontWeight: "bold"
    }
});