import React from 'react';
import * as S from './styles';
import { Text, StyleSheet, View } from "react-native";

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

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#ffffff',
      alignItems: 'center',
   },
   containerFooter: {
      width: '100%',
      backgroundColor: '#ffffff',
      alignItems: 'center',
   }

});