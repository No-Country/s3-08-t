import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';


export const RegisterScreen = () => {

  
  
    const validationSchema = Yup.object().shape({
      name: Yup
        .string()
        .required('Email Address is Required'),
        email: Yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is Required'),
        password: Yup
        .string()
        .min(8)
        .required('Password is required'),
      phone: Yup
        .string()
        .min(8)
        .required('Phone is required'),
    })

    return (
      <ScrollView>
        <View style={{justifyContent:'center', marginTop:50}}>   
      <Text style ={{fontSize:24, textAlign:'center', marginTop: 20, marginBottom:20}}>Crear una Cuenta</Text>
      <Formik
            validationSchema={validationSchema}
            initialValues={{ name: '', email: '', password: '', phone: '', address: '' }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (   
              <>
      <CustomInput
       onChangeText={handleChange('name')}
       onBlur={handleBlur('name')}
       value={values.name}
       //title='Nombre'
       placeholder='NOMBRE' 
       errors={errors.name}/>
      
      <CustomInput
       onChangeText={handleChange('email')}
       onBlur={handleBlur('email')}
       value={values.email}
       //title='Email'
       placeholder='EMAIL' 
       errors={errors.email} />

      <CustomInput
       onChangeText={handleChange('password')}
       onBlur={handleBlur('password')}
       value={values.password}
       secureTextEntry={true}
       //title='Clave'
       placeholder='CLAVE' 
       errors={errors.password} />

      <CustomInput
       onChangeText={handleChange('address')}
       onBlur={handleBlur('address')}
       value={values.address}
       //title='Direccion' 
       placeholder='DIRECCION'
       errors={errors.address} />

      <CustomInput
       onChangeText={handleChange('phone')}
       onBlur={handleBlur('phone')}
       value={values.phone}
       //title='Celular' 
       placeholder='CELULAR'
       errors={errors.phone} />

<CustomButton 
      title='Confirmar'
      onPress= {handleSubmit}

      />

       
      </>)}
            </Formik>
            </View>
  </ScrollView >
  )
}

