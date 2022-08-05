import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';



export const LoginScreen = () => {

  
  
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
        <View style={{alignItems:'center', justifyContent:'center', marginBottom:50, marginTop:50}}>
    <Image style={styles.loginLogo} source={require('../../assets/login.png')} />
    </View>  
      <Formik
            validationSchema={validationSchema}
            initialValues={{ username: '', password: '' }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (   
              <>
      <CustomInput
       onChangeText={handleChange('username')}
       onBlur={handleBlur('username')}
       value={values.username}
       title='Usuario'
       placeholder='Usuario....' 
       errors={errors.username}/>
      
      <CustomInput
       onChangeText={handleChange('password')}
       onBlur={handleBlur('password')}
       value={values.password}
       secureTextEntry={true}
       title='Clave'
       placeholder='......' 
       errors={errors.password} />

      <CustomButton 
      title='Iniciar Sesion'
      onPress= {handleSubmit}

      />

             
      </>)}
            </Formik>
      </ScrollView>
  )
}


const styles = StyleSheet.create({
loginLogo:{
    width:100,
    height:100,
    marginTop:40
},
})