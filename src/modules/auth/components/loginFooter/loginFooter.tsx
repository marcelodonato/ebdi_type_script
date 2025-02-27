import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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
        backgroundColor: '#E0E3E7',
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
        color: '#A4A4A4',
        fontWeight: "bold"
    },
    textClicable: {
        marginStart: 6,
        color: '#000000',
        fontWeight: "bold"
    }
});