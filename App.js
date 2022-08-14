import { View, Text, SafeAreaView } from "react-native";
import { useFonts } from 'expo-font';
import { RegisterScreen } from "./src/screens/RegisterScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DoctorsCards } from "./src/screens/DoctorsCards";
import { LandingScreen} from "./src/screens/LandingScreen";
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

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
      <SafeAreaProvider style={{flex: 1, justifyContent: "center"}}>
      <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="landing" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Selección de doctor" component={DoctorsCards} options={{ headerShown: false }} />
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
     
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
   
  }</>
  );
}
