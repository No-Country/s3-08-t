import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingScreen } from '../../screens/LandingScreen';
import { InicioScreen } from '../../screens/InicioScreen';
import { DoctorsCards } from '../../screens/DoctorsCards';
import SobreDr from '../../screens/SobreDr';
import { LoginScreen } from '../../screens/LoginScreen';
import { RegisterScreen } from '../../screens/RegisterScreen';
import ConfCita from '../../screens/ConfCita';
import HoraCita from '../../screens/HoraCita';
import { useSelector } from "react-redux";

import Header from '../Header';
import { PacienteScreen } from '../../screens/PacienteScreen';
import Footer from '../Footer';
import Calendario from '../../screens/Calendario';
import { MarcarCitaScreen } from '../../screens/MarcarCitaScreen';
import { MiInformacion } from '../../screens/MiInformacion';



const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    const {userToken} = useSelector(state=>state.user);
    return (<>
        
        <Stack.Navigator initialRouteName="inicio" headerMode= "screen">
        {!userToken? (
        <>
        <Stack.Screen name="Selección de doctor" component={DoctorsCards} options={{ header:  () => <Header/> }} />
        <Stack.Screen name="landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="inicio" component={InicioScreen} options={{ headerShown: false }} />
        
          
          
        </>):(<>
         
        <Stack.Screen name="paciente" component={PacienteScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="sobreDr" component={SobreDr} options={{ header:  () => <Header/> }} />
        <Stack.Screen name="marcarCita" component={MarcarCitaScreen}  options={{ header:  () => <Header/> }} />
        <Stack.Screen name="Selección de doctor" component={DoctorsCards} options={{ header:  () => <Header/> }} />
        <Stack.Screen name="calendario" component={Calendario}  options={{ header:  () => <Header/> }} />
        <Stack.Screen name="miInformacion" component={MiInformacion}  options={{ header:  () => <Header/> }} />
        
          
     <Stack.Screen name="ConfirmaCita" component={ConfCita} options = {{
header:  () => <Header/>
          }}
          />
          <Stack.Screen name="HoraCita" component={HoraCita}/>
          
          </>
          )}
      </Stack.Navigator>
      
      </>
    
    )
    
    
        }

export default StackNavigator