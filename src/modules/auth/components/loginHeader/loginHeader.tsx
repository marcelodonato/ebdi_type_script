import { View, Image, StyleSheet, ImageBackground, Text,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { strings } from '../../../../res/strings/strings';
import { colors } from '../../../../res/colors/colors';

const LoginHeader: React.FC = () => {
    return (
        <>
        <View style={styles.container}>
            <ImageBackground
            source={require('../../../../../assets/background-image.png')}
            resizeMode='cover'
            style={styles.imageBackground}
            >
                <SafeAreaView  edges={['top']}>
                <View>
                    <Image style={styles.image} source={require('../../../../../assets/ebdi_logo.png')} />
                </View>
                <View>
                    <Text style={styles.textTitle} >{strings.loginTitle}</Text>
                    <Text style={styles.textSubTitle} >{strings.loginSubTitle}</Text>
                </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
        </>
    )
};

export default LoginHeader;

const styles = StyleSheet.create({
    imageBackground:{
        justifyContent: 'center',
        flex: 1,
    },

    container: {
        width: '100%',
        height: '25%',
        backgroundColor: colors.black
    },
    image: {
        marginTop: 8,
        marginStart: 16,
        width: '20%',
        height: 30
    },
    textTitle: {
        marginStart: 16,
        marginTop: 38,
        color: colors.light,
        fontWeight: 'bold',
        fontSize: 22,
    },
    textSubTitle: {
        marginStart: 16,
        color: colors.light
    }
});