import { StyleSheet, View, ImageBackground, Text, SafeAreaView, Image } from "react-native";
import { colors } from "../../../res/colors/colors";

const ProfileHeader: React.FC = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.imageBackground}
                source={require('../../../../assets/background-image.png')}
                resizeMode='cover'
            >
                <View style={styles.cardContainer}>
                    <View style={styles.containerPosition}>
                        <View style={styles.imageCOntainer}>
                            <Image  style={styles.image} source={require('../../../../assets/photoTest.png')}/>
                            {/* Vou aadcionar uma foto aqui dentro para mostrar a foto do usuario */}
                        </View>
                        <View style={styles.containerTexts}>
                            <Text style={styles.textName}>Marcelo Donato</Text> {/* Vou receber da api */}
                            <Text style={styles.textSubTitle}>Dev</Text> {/* Vou receber da api */}
                            <Text style={styles.textSubTitle}>Mblabs</Text> {/* Vou receber da api */}
                            <Text style={styles.textDisc} numberOfLines={2}>Desenvolvedor de aplicativos movies nativos para android, tambem atuo com o desenvolvimento low code e agora com desenvolvimento em react-native </Text> {/* Vou receber da api */}
                        </View>
                    </View>

                </View>
            </ImageBackground>
        </View>
    );
};

export default ProfileHeader;

const styles = StyleSheet.create({
    imageBackground: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    container: {
        width: '100%',
        height: 300,
        backgroundColor: colors.black,
    },
    cardContainer: {
        paddingHorizontal: 16,
        width: '100%',
        height: '60%',
        alignItems: 'center',
        backgroundColor: colors.light,
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
    },
    imageCOntainer: {
        width: 120,
        height: 120,
        backgroundColor: colors.light,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center', 
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderRadius: '100%'
    },
    image :{
        width: 117,
        height: 117,
        borderRadius: 100,
    },
    containerPosition: {
        bottom: 65,
        alignItems: 'center',
        paddingHorizontal: 16
    },
    containerTexts: {
        alignItems: 'center'
    },
    textName: {
        fontSize: 26,
        fontWeight: 'bold',

    },
    textSubTitle: {
        marginTop: 6,
        fontSize: 14
    },
    textDisc: {
        marginTop: 8,
        fontSize: 12,
        overflow: 'hidden'
    }
});
