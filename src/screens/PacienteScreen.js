import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
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
        <Image style={styles.logo} source={require('../../assets/doctor.png')} />
        <View>
          <Text style={styles.text1}>Buenas Noches,</Text>
          <Text style={styles.text2}>Maria das Flores!</Text>
        </View>
      </View>
      
      <View>
        <Text>Mi Historial</Text>
        <CustomInput />
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
  logo: {
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
  }
})