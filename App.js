import { View, Text, SafeAreaView, Platform } from "react-native";
import { useFonts } from 'expo-font';
import { RegisterScreen } from "./src/screens/RegisterScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import ConfCita from "./src/screens/ConfCita";
import HoraCita from "./src/screens/HoraCita";
import Header from "./src/components/Header";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "react-native-web";
import Footer from './src/components/Footer';
import { navigationRef } from './RootNavigation'

export default function App() {
  const Stack = createNativeStackNavigator();

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
    
      <SafeAreaView style={{flex: 1, justifyContent: "center",}}>
      <NavigationContainer style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
      ref= {navigationRef}
      >
      <Stack.Navigator 
      initialRouteName="ConfirmaCita"
      headerMode= "screen">
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen 
          name="ConfirmaCita" 
          component={ConfCita} 
          options = {{
              header:  () => <Header/>
          }}
          />
          <Stack.Screen name="HoraCita" component={HoraCita}/>
      </Stack.Navigator>
      <Footer/>
      
      </NavigationContainer>
    </SafeAreaView>
   
  }</>
  );
}
