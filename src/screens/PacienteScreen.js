import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';



export const PacienteScreen = () => {

  const validationSchema = Yup.object().shape({
    username: Yup
      .string()
      .required('Nombre de Usuario Requerido'),
    password: Yup
      .string()
      .required('Clave Requerida')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'La Clave debe tener al menos 8 caracteres, una mayuscula, un numero y un caracter especial'
      ),

  })

  return (
    <ScrollView >
      <View style={styles.container}>
        <Image style={styles.logoDoctor} source={require('../../assets/doctor.png')} />
        <View>
          <Text style={styles.text1}>Buenas Noches,</Text>
          <Text style={styles.text2}>Maria das Flores!</Text>
        </View>
      </View>
      
      <View style={styles.container2}>
        <Text style={styles.text3}>Mi Historial</Text>
        
        <View style={styles.container3}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={{flex:1, fontSize: 20, fontFamily: 'robotoLight', color: '#fff'}}
              placeholder="buscar"
              placeholderTextColor='#fff'
              selectionColor={'#40B590'}
            />
            <Image source={require('../../assets/buscar.png')} style={styles.ImageStyle} />
          </View>
        </View>
        
      </View>
      
      
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginLeft: 21,
    marginRight: 12
  },
  logoDoctor: {
    width: 77,
    height: 102,
    marginTop: 0,
    resizeMode: 'contain'
  },
  text1: {
    color: '#A9A9A9',
    fontSize: 14,
    fontFamily: 'robotoRegular',
    textAlign: 'right'
  },
  text2: {
    fontSize: 18,
    fontFamily: 'robotoMedium',
    textAlign: 'right'
  },
  
  container2: {
    paddingHorizontal:21,
  },
  text3: {
    fontSize: 20,
    fontFamily: 'robotoMedium',
    marginVertical: 12,
  },
  
  
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //margin: 10,
  },
  
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(64, 181, 144, 0.5)',
    //borderWidth: .5,
    //borderColor: '#000',
    height: 80,
    borderRadius: 18 ,
    //margin: 10,
    
    paddingLeft: 27,
  },
   
  ImageStyle: {
    padding: 10,
    margin: 13,
    height: 56,
    width: 56,
    resizeMode : 'stretch',
    alignItems: 'center'
  },
})