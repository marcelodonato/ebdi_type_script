import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import Login from './src/modules/auth/screens/login/login';
import Register from './src/modules/register/screens/register';

import FooterBar from './src/components/footerbar';
import store from './src/store/store';

const Stack = createStackNavigator();

export default function App() {
  return (
   <Provider store={store}>
     <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">

          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Register"
            component={Register}
          />
          <Stack.Screen
            name="Home"
            component={FooterBar}
          />

        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
   </Provider>
  );
}
