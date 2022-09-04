
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { CustomInputWithIcon } from '../components/CustomInputWithIcon';
import { CustomSelector } from '../components/CustomSelector';
import { registerPatient } from '../redux/features/patient/patientActions';
import { ModalNotifications } from '../components/ModalNotifications';
import { registerUser } from '../redux/features/user/userActions';
import { getDoctors, getDoctorTypes } from '../redux/features/doctor/doctorActions';



export const RegisterScreen = () => {
  const [selectedRole, setSelectedRole] = useState('TIPO USUARIO');
  const [ selectedDoctorType, setSelectedDoctorType] = useState('ESPECIALIDAD');
 
  const dispatch = useDispatch();
  const {error}= useSelector(state=>state.patient);
  const [toggleIcon, setToggleIcon] = useState(true);


  const doctorTyp = useSelector(state=> state.doctor.doctorTypes);
  const doctorTypes = doctorTyp.map(e=>e.nameType);

  
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

        country: Yup
        .string()
        .required('Campo Country Requerido!'),

        img: Yup
        .string()
        .required('Campo Imagen Requerido!'),

        role: Yup
        .string()
        ,

        userName: Yup
        .string()
        .required('Campo Username Requerido!'),
    })

    const handleDispatch= async(values)=>{
      console.log(selectedRole);
      const newUser = 
      {
          "userName": values.userName,
          "password": values.password,
          "role": values.role,
          "dni":values.dni
       };

      if (selectedRole==='PACIENTE') {
        values.role='USER_ROLE'
         const newPatient = 
         {
            "dni":values.dni,
            "name": values.name,
           "email": values.email,
           "userEmail": values.email,
           "phoneNumber": values.phone,
           "address": values.address,
           "city": values.city,
           "country": values.country
          };

         await dispatch(registerUser(newUser))
         await dispatch(registerPatient(newPatient))

      }
      else if( selectedRole==='DOCTOR'){
        values.role='DOCTOR_ROLE'
        const newDoctor = 
         {
            "dni":values.dni,
            "doctorName": values.name,
           "doctorEmail": values.email,
           "doctorPhone": values.phone,
           "doctorAddress": values.address,
           "doctorCity": values.city,
           "doctorCountry": values.country,
           "type": ["traumatologo"]
          };

          await dispatch(registerUser(newUser))
          await dispatch(registerDoctor(newDoctor))

      }
          
    else if(selectedRole==='ADMIN'){
      values.role = 'ADMIN_ROLE'     
    }
     

     
      



      
      
      
    }

    
    useEffect(()=>{
      dispatch(getDoctors());
      dispatch(getDoctorTypes());
      
    },[]);

    return (
     
      
      <ScrollView>
        {error&&<ModalNotifications title='Error' msg='Error al registrar'></ModalNotifications>}
         <View style={{justifyContent:'center', marginTop:30}}>  
      <Text style ={{fontSize:24, textAlign:'center', marginTop: 20, marginBottom:20}}>Crear una Cuenta</Text>
      
      <Formik
            validationSchema={validationSchema}
            initialValues={{ name: 'Juanito', email: 'juan@gmail.com', dni:'1095098129', userName:'juancho2022', password: '98262005', phone: '3052938911', country:'Colombia', city:'Giron', address: 'Calle Suiza', role:'DOCTOR', img:''}}
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
       onChangeText={handleChange('country')}
       onBlur={handleBlur('country')}
       value={values.country}
       placeholder='COUNTRY'
       errors={errors.country} />

      <CustomInput
       onChangeText={handleChange('phone')}
       onBlur={handleBlur('phone')}
       value={values.phone}
       placeholder='CELULAR'
       errors={errors.phone} />

      <CustomSelector 
      data = {[ 'PACIENTE', 'DOCTOR', 'ADMIN', ]}
      selectedValue={selectedRole}
      setSelectedValue={setSelectedRole}
      onChangeText={handleChange('role')}
      onBlur={handleBlur('role')}
      value={values.role}
      errors={errors.role}
      />  

     {selectedRole==='DOCTOR'&&<CustomSelector
      data = {doctorTypes}
      selectedValue={selectedDoctorType}
      setSelectedValue={setSelectedDoctorType}
      onChangeText={handleChange('doctorType')}
      onBlur={handleBlur('doctorType')}
      value={values.doctorType}
      errors={errors.doctorType}
      /> } 


      
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

       <View style={{alignItems:'center'}}>
        <Image style={{width:100, height:100, borderRadius:100, marginVertical:10}} source= { values.img? {uri: values.img} : require( "../../assets/Images/profile.png") } />
        </View>        
      <CustomInput
       onChangeText={handleChange('img')}
       onBlur={handleBlur('img')}
       value={values.img}
       placeholder='URL FOTO'
       errors={errors.img} />

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