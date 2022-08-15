import { View, Text } from "react-native";
import { useFonts } from 'expo-font';
import { RegisterScreen } from "./src/screens/RegisterScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { DoctorsCards } from "./src/screens/DoctorsCards";
import { LandingScreen} from "./src/screens/LandingScreen";
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { InicioScreen } from "./src/screens/InicioScreen";
import {ProfileScreen} from './src/screens/ProfileScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  const [loaded] = useFonts({
    robotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    robotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    robotoLight: require('./assets/fonts/Roboto-Light.ttf'),
    robotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
    
    });

  return (
   <>
    {loaded&&
      <Provider store={store}>
      <SafeAreaView style={{flex: 1, justifyContent: "center"}}>
      <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="landing" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="inicio" component={InicioScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Selección de doctor" component={DoctorsCards} options={{ headerShown: false }} />
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    </Provider>
   
  }</>
  );
}
