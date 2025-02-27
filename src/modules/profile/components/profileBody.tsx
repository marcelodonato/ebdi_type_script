import { View, StyleSheet } from "react-native";
import ButtonText from "../../../components/buttonText";
import { colors } from "../../../res/colors/colors";


ButtonText

const ProfileBody: React.FC = () => {

    function onClickButton() {
        console.log("meu botao")
    }

    return(
        <>
        <View style={styles.bodyContainer}>
            <View style={styles.buttonContainer}><ButtonText title="Alterar dados" onPress={onClickButton}/></View>
            <View style={styles.buttonContainer}><ButtonText title="Favoritos" onPress={onClickButton}/></View>
            <View style={styles.buttonContainer}><ButtonText title="Termos de uso" onPress={onClickButton}/></View>
            <View style={styles.buttonContainer}><ButtonText title="Poliítica de privacidade" onPress={onClickButton}/></View>
            <View style={styles.buttonContainer}><ButtonText title="Excluir conta" onPress={onClickButton} textIconColor="#FF6E6E"/></View>
            <View style={styles.buttonContainer}><ButtonText title="Logout" onPress={onClickButton}/></View>
        </View>
        </>
    )
};

export default ProfileBody;

const styles = StyleSheet.create({
    bodyContainer: {
        backgroundColor: colors.light,
        padding: 16
    },
    buttonContainer: {
        marginTop: 8
    }
})

