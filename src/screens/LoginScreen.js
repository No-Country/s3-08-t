import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { loginUser } from '../redux/features/user/userActions';
import { ModalNotifications } from '../components/ModalNotifications'; 
import { CustomInputWithIcon } from '../components/CustomInputWithIcon';
import { useNavigation } from '@react-navigation/native';


export const LoginScreen = () => {
const {error, loading, success, userToken} = useSelector(state=>state.user);
const navigation = useNavigation();

const [toggleIcon, setToggleIcon] = useState(true);

  const dispatch = useDispatch();
  
    const validationSchema = Yup.object().shape({
      userName: Yup
        .string()
        .required('Nombre de Usuario Requerido'),
      password: Yup
      .string()
      .required('Clave Requerida')
      //.matches(
      //    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      //    'La Clave debe tener al menos 8 caracteres, una mayuscula, un numero y un caracter especial'
      //),

      
    })

    const handleLogin = (values)=>{
      dispatch(loginUser(values))
    };

    useEffect(()=>{
      if(success) navigation.navigate('paciente');
    },[success])
   
    return (
    <ScrollView > 
      {error&&<ModalNotifications title='Error' msg='Usuario o Contraseña Incorrectos'></ModalNotifications>}
      
      <Text>{userToken?'Logueado':'No Logueado'}</Text>
        <View style={{alignItems:'center', justifyContent:'center', marginBottom:50, marginTop:50}}>
    <Image style={styles.loginLogo} source={require('../../assets/login.png')} />
    </View>  
      <Formik
            validationSchema={validationSchema}
            initialValues={{ userName: '', password: '' }}
            onSubmit={values => handleLogin(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (   
              <>
      <CustomInput
       onChangeText={handleChange('userName')}
       onBlur={handleBlur('userName')}
       value={values.userName}
       title='Usuario'
       placeholder='USUARIO' 
       errors={errors.userName}
       />
      
      {/*<CustomInput
       onChangeText={handleChange('password')}
       onBlur={handleBlur('password')}
       value={values.password}
       secureTextEntry={true}
       title='Clave'
       placeholder='......' 
       errors={errors.password} />
*/}

      <CustomInputWithIcon
       onChangeText={handleChange('password')}
       onBlur={handleBlur('password')}
       value={values.password}
       secureTextEntry={toggleIcon? true : false}
       title='Clave'
       placeholder='CLAVE' 
       errors={errors.password} 
       toggleIcon={toggleIcon}
       setToggleIcon={setToggleIcon}/>


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