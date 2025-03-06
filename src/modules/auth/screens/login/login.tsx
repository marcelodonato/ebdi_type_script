import React from 'react';
import { View } from "react-native";
import styles from './loginStyles';

import LoginBody from '../../components/loginBody/loginBody';
import LoginHeader from '../../components/loginHeader/loginHeader';
import LoginFooter from '../../components/loginFooter/loginFooter';

const Login: React.FC = ({ navigation }: any) => {
   return (
      <>
         <View style={styles.container}>
            <LoginHeader />
            <LoginBody  navigation={navigation}/>
         </View>

         <View style={styles.containerFooter}>
         <LoginFooter navigation={navigation} />
         </View>
         
      </>
   )
}

export default Login;