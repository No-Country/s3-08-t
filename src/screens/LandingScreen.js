import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { CustomButton } from '../components/CustomButton';
import { COLORS } from '../../styles/colors';


export const LandingScreen = () => {
const navigation = useNavigation();

  return (
    <View style={styles.homeContainer}>
      <View style={{marginTop:130}}>
      <Image style={styles.landingImage} source={require('../../assets/landing/landing.png')} />
      
      <View>
      <Text style={styles.landingTitle}>Bienvenido!</Text>
      <Text style={styles.landingSubtitle}>Descripcion</Text>
      </View>
      </View>
      
      <View style={{alignItems:'flex-end'}}>
      <TouchableOpacity style={styles.landingButton} onPress={()=>navigation.navigate('inicio')}>
        <Text style={styles.landingButtonTitle}>{'>'}</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  homeContainer: {
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',
    
  },
  landingImage:{
    width:304,
    height:304,
    marginHorizontal:30
  },
  landingTitle:{
    marginTop:70,
    fontFamily:'robotoBold',
    fontSize:35,
    paddingHorizontal:20
  },
  landingSubtitle:{
    paddingHorizontal:20,
    marginTop:10,
  },
  landingButton:{
    width:55,
    height:55,
    backgroundColor:COLORS.secondary,
    borderRadius:25,
    marginRight:20
    
  },
  landingButtonTitle:{
    color:COLORS.white,
    fontSize:35,
    fontFamily:'robotoLight',
    textAlign:'center',
    textAlignVertical:'center'
  }

})


