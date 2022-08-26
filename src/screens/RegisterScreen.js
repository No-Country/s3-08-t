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
import { registerPatient } from '../redux/features/patient/patientActions';



export const RegisterScreen = () => {
  const [data, setData] = useState('TIPO USUARIO');
  const dispatch = useDispatch();
  const us= useSelector(state=>state.user);
  const [toggleIcon, setToggleIcon] = useState(true);

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
        dni: Yup
        .number('Numero de Identidad no Valido')
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
        .required('Campo Ciudad Requerido!'),

        role: Yup
        .string()
        ,

        userName: Yup
        .string()
        .required('Campo Username Requerido!'),
    })

    const handleDispatch= async(values)=>{
      data==='PACIENTE'? values.role='USER_ROLE' : 
      data==='DOCTOR'? values.role='DOCTOR_ROLE' :
      values.role = 'ADMIN_ROLE'     
      
      const newUser = 
      {
          "userName": values.userName,
          "password": values.password,
          "role": values.role,
          "dni":values.dni
       };

      const newPatient = 
      {
         "dni":values.dni,
         "name": values.name,
        "email": values.email,
        "userEmail": values.email,
        "phoneNumber": values.phone,
        "address": values.address,
        "city": values.city,
        "country": "Colombia"
       };
      


      //console.log(newUser);
      console.log(newPatient)
      //await dispatch(registerUser(newUser))
      await dispatch(registerPatient(newPatient))
      
      
    }

    
   

    return (
     
      
      <ScrollView>
         <View style={{justifyContent:'center', marginTop:30}}>  
      <Text style ={{fontSize:24, textAlign:'center', marginTop: 20, marginBottom:20}}>Crear una Cuenta</Text>
      
      <Formik
            validationSchema={validationSchema}
            initialValues={{ name: '', email: '', dni:'', userName:'', password: '', phone: '', city:'', address: '', role:'' }}
            onSubmit={(values)=>handleDispatch(values)}
            //onSubmit={(values)=>console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (   
              <>
      <CustomInput
       onChangeText={handleChange('name')}
       onBlur={handleBlur('name')}
       value={values.name}
       placeholder='NOMBRE' 
       errors={errors.name}/>
      
      <CustomInput
       onChangeText={handleChange('dni')}
       onBlur={handleBlur('dni')}
       value={values.dni}
      placeholder='# DOCUMENTO IDENTIDAD' 
       errors={errors.dni}/>

      <CustomInput
       onChangeText={handleChange('email')}
       onBlur={handleBlur('email')}
       value={values.email}
       placeholder='EMAIL' 
       errors={errors.email} />

      <CustomInput
       onChangeText={handleChange('address')}
       onBlur={handleBlur('address')}
       value={values.address}
       placeholder='DIRECCION'
       errors={errors.address} />

      <CustomInput
       onChangeText={handleChange('city')}
       onBlur={handleBlur('city')}
       value={values.city}
       placeholder='CIUDAD'
       errors={errors.city} />

      <CustomInput
       onChangeText={handleChange('phone')}
       onBlur={handleBlur('phone')}
       value={values.phone}
       placeholder='CELULAR'
       errors={errors.phone} />

      <CustomSelector
      selectedValue={data}
      setSelectedValue={setData}
      onChangeText={handleChange('role')}
      onBlur={handleBlur('role')}
      value={values.role}
      errors={errors.role}
      />  
      
      <CustomInput
       onChangeText={handleChange('userName')}
       onBlur={handleBlur('userName')}
       value={values.userName}
       placeholder='NOMBRE DE USUARIO'
       errors={errors.userName} />

      <CustomInputWithIcon
       onChangeText={handleChange('password')}
       onBlur={handleBlur('password')}
       value={values.password}
       secureTextEntry={toggleIcon? true : false}
       placeholder='CLAVE' 
       errors={errors.password} 
       toggleIcon={toggleIcon}
       setToggleIcon={setToggleIcon}/>
      
      

<CustomButton 
      title='Confirmar'
      //onPress= {handleSubmit}
      onPress= {handleSubmit}
      />

       
      </>)}
            </Formik>
           
            </View>     
            
  </ScrollView >
  
  ) 

  
}
