import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import Footer from '../components/Footer';
import Greting from '../components/Greting';
import {useDispatch} from 'react-redux';
import { getDoctors, getDoctorTypes } from '../redux/features/doctor/doctorActions';
import axios from 'axios';
import {BASE_URL} from "@env";


export const PacienteScreen = ({userInfo}) => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getDoctors());
    dispatch(getDoctorTypes());
    
  },[]);
  
  return (
    <>
    <ScrollView >
      <View style={{flex:1, marginTop:40, marginHorizontal:10}}>
      <Greting name= {'Cesar Galeano'} img={"https://media-exp1.licdn.com/dms/image/D4D35AQEce8GvFyg66A/profile-framedphoto-shrink_200_200/0/1650208419921?e=1662300000&v=beta&t=eYMKeC0kowgXgQhJfT7KZQ4q6dizfjvGw5SoZULH2Zs"}/>
            
      </View>
      
      <View style={styles.container2}>
        <Text style={styles.text3}>Mi Historial</Text>
        
        {/* TextInput buscar - start */}
        {/* https://reactnativecode.com/place-image-icon-inside-textinput-left-side/ */}
        <View style={styles.container3}>
          <View style={styles.sectionStyle}>
            <TextInput
              style={{flex:1, fontSize: 20, fontFamily: 'robotoLight', color: '#fff'}}
              placeholder="buscar"
              placeholderTextColor='#fff'
              selectionColor={'#40B590'}
            />
            <Image source={require('../../assets/buscar.png')} style={styles.imageStyle} />
          </View>
        </View>
        {/* TextInput buscar - end */}
        
        {/* Label + input */}
        <Text style={styles.text4}>Examenes</Text>
        <View style={styles.container4}>
          <Image source={require('../../assets/img1.png')} />
          <Image source={require('../../assets/img2.png')} />
        </View>
        
        {/* Label + input */}
        <Text style={styles.text4}>Doctores</Text>
        <TextInput
          style={styles.input1}
          placeholder="buscar"
          placeholderTextColor='#fff'
          selectionColor={'#40B590'}
        />
        
        {/* Label + input */}
        <Text style={styles.text4}>Mis citas</Text>
        <TextInput
          style={styles.input1}
          placeholder="buscar"
          placeholderTextColor='#fff'
          selectionColor={'#40B590'}
        />
        
        {/* Plus icon */}
        <View style={styles.plusImage}>
          <Image source={require('../../assets/plus.png')} />
        </View>
      </View>
      
      
      
      
    </ScrollView>
    <Footer />
    </>
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
  
  //Mi historial
  text3: {
    fontSize: 20,
    fontFamily: 'robotoMedium',
    marginVertical: 12,
  },
  
  // ************************
  // TextInput buscar - start
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //margin: 10,
  },
  
  sectionStyle: {
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
  // buscar icon
  imageStyle: {
    padding: 10,
    margin: 13,
    height: 56,
    width: 56,
    resizeMode : 'stretch',
    alignItems: 'center'
  },
  // TextInput buscar - end
  // **********************
  
  // plus icon
  plusImage: {
    alignItems: 'center',
    marginTop: 25
  },
  // examenes, doctores, mis citas
  text4: {
    fontSize: 16,
    fontFamily: 'robotoBold',
    marginVertical: 12,
  },
  input1: {
    fontSize: 16,
    fontFamily: 'robotoLight',
    color: '#fff',
    backgroundColor: 'rgba(64, 181, 144, 0.5)',
    height: 50,
    borderRadius: 13,
    paddingLeft: 27
  },
  // examenes images
  container4: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})