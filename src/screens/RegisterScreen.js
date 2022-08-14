import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/features/user/userActions';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { CustomInputWithIcon } from '../components/CustomInputWithIcon';
import { CustomSelector } from '../components/CustomSelector';




export const RegisterScreen = () => {
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const us= useSelector(state=>state.user);
  
  useEffect(()=>{
    if(us.success){
      console.log('Usuario Cargado')
    }

  },[]);
  

  
    const validationSchema = Yup.object().shape({
      name: Yup
        .string()
        .required('Campo Nombre Requerido!'),
        email: Yup
        .string()
        .email("Ingrese un email valido!")
        .required('Campo Email Requerido!'),
        password: Yup
        .string()
        .min(8)
        .required('Campo Clave Requerido!')
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          'La Clave debe tener al menos 8 caracteres, una mayuscula, un numero y un caracter especial'
      ),
       phone: Yup
        .string()
        .min(8)
        .required('Campo Telefono Requerido!'),

        address: Yup
        .string()
        .min(8)
        .required('Campo Direccion Requerido!'),

        city: Yup
        .string()
        .min(8)
        .required('Campo Ciudad Requerido!'),
    })

    const handleDispatch= async(values)=>{
      
      console.log(values);
      console.log(us);
      dispatch(registerUser(values))
      
      
    }

    return (
      <ScrollView>
        <View style={{justifyContent:'center', marginTop:50}}>   
      <Text style ={{fontSize:24, textAlign:'center', marginTop: 20, marginBottom:20}}>Crear una Cuenta</Text>
      <Formik
            validationSchema={validationSchema}
            initialValues={{ name: '', email: '', password: '', phone: '', city:'', address: '', role:'' }}
            onSubmit={(values)=>handleDispatch(values)}
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
       onChangeText={handleChange('address')}
       onBlur={handleBlur('address')}
       value={values.address}
       //title='Direccion' 
       placeholder='DIRECCION'
       errors={errors.address} />

      <CustomInput
       onChangeText={handleChange('city')}
       onBlur={handleBlur('city')}
       value={values.city}
       //title='Direccion' 
       placeholder='CIUDAD'
       errors={errors.city} />

      <CustomInput
       onChangeText={handleChange('phone')}
       onBlur={handleBlur('phone')}
       value={values.phone}
       //title='Celular' 
       placeholder='CELULAR'
       errors={errors.phone} />

      <CustomInputWithIcon
       onChangeText={handleChange('password')}
       onBlur={handleBlur('password')}
       value={values.password}
       secureTextEntry={true}
       //title='Clave'
       placeholder='CLAVE' 
       errors={errors.password} />
       

      {/* <CustomSelector data={data} selectedValue={values.role} setSelectedValue={handleChange('role')}/>*/}
      <CustomSelector selectedValue={data} setSelectedValue={setData}/>        

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

