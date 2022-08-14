import { View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { CustomButton } from '../components/CustomButton';


export const LandingScreen = () => {
const navigation = useNavigation();

const handleClickLogin = ()=>{
navigation.navigate('login')

};
const handleClickRegister = ()=>{
  navigation.navigate('register')
  
  };

  return (
    <View style={styles.homeContainer}>
      
      
      <View>
       <CustomButton 
      title='Iniciar Sesion'
      onPress= {handleClickLogin}
      />
      <CustomButton 
      title='Registrarse'
      onPress= {handleClickRegister}
      />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  homeContainer: {
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-end'
    
    

    

       
  }
})