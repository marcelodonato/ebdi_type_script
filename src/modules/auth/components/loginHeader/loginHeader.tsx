import { View, Image, ImageBackground, Text, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { strings } from '../../../../res/strings/strings';
import styles from './loginHeaderStyles';

const LoginHeader: React.FC = () => {
    return (
        <>
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../../../../assets/background-image.png')}
                    resizeMode='cover'
                    style={styles.imageBackground}
                >
                    <SafeAreaView edges={['top']}>
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