import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import { useFonts } from 'expo-font';
import { RegisterScreen } from "./src/screens/RegisterScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import ConfCita from "./src/screens/ConfCita";
import HoraCita from "./src/screens/HoraCita";
import Header from "./src/components/Header";
import {NavigationContainer} from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DoctorsCards } from "./src/screens/DoctorsCards";
import { LandingScreen} from "./src/screens/LandingScreen";
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { InicioScreen } from "./src/screens/InicioScreen";
import {navigationRef} from "./RootNavigation";
import SobreDr from "./src/screens/SobreDr";
import PacienteScreen from "./src/screens/PacienteScreen";
import Footer from "./src/components/Footer";


import StackNavigator from "./src/components/Navigation/StackNavigator";

export default function App() {
  


  const [loaded] = useFonts({
    robotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    robotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    robotoLight: require('./assets/fonts/Roboto-Light.ttf'),
    robotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
    poppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    poppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    poppinsBlack:  require('./assets/fonts/Poppins-Black.ttf'),
    });

    

  return (
   <>
    {loaded&&
      <Provider store={store}>
      <SafeAreaView style={{flex: 1, justifyContent: "center"}}>
      <NavigationContainer style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
      ref= {navigationRef}
      >
      <StackNavigator />
      
      
      </NavigationContainer>
    </SafeAreaView>
    </Provider>
   
  }</>
  );
}
