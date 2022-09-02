import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import Footer from '../components/Footer';
import Greting from '../components/Greting';
import {useDispatch} from 'react-redux';
import { getDoctors, getDoctorTypes } from '../redux/features/doctor/doctorActions';
import axios from 'axios';
import {BASE_URL} from "@env";
import * as RootNavigation  from "../../RootNavigation";
import StyledText from '../../styles/styleText';
import  DoctorCard   from "../components/DoctorCard"
import DoctorsCards from './DoctorsCards';
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';


export const PacienteScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {dni, name, img="https://media-exp1.licdn.com/dms/image/D4D35AQEce8GvFyg66A/profile-framedphoto-shrink_200_200/0/1650208419921?e=1662300000&v=beta&t=eYMKeC0kowgXgQhJfT7KZQ4q6dizfjvGw5SoZULH2Zs"} = useSelector(state=>state.user.sesionInfo.pat)

  useEffect(async()=>{

    await dispatch(getDoctors())
    await dispatch(getDoctorTypes())

  },[])


  return (
    <>
    <ScrollView >
      <View style={{flex:1, marginTop:40, marginHorizontal:10}}>
      <Greting name= {name} img={"https://media-exp1.licdn.com/dms/image/D4D35AQEce8GvFyg66A/profile-framedphoto-shrink_200_200/0/1650208419921?e=1662300000&v=beta&t=eYMKeC0kowgXgQhJfT7KZQ4q6dizfjvGw5SoZULH2Zs"}/>
      <StyledText medium  bold mt24 mb24 >Mi Historial</StyledText>      
      </View>
      
      <View style={styles.container2}>
       
        
        {/* TextInput buscar - start */}
        {/* https://reactnativecode.com/place-image-icon-inside-textinput-left-side/ */}
        <View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={{flex:1, fontSize: 20, fontFamily: 'robotoLight', color: '#fff'}}
              placeholder="buscar doctor"
              placeholderTextColor='#fff'
              selectionColor={'#40B590'}
            />
            <Image 
            source={require('../../assets/buscar.png')} 
            style={styles.imageStyle} />
          </View>
        </View>
        {/* Examanes */}
        <StyledText small  bold mt24 mb24>Examanes</StyledText>
        <View style= {styles.boxExamenes}>
        {/*Examen Sangre*/}
          <TouchableOpacity
          onPress={()=> navigation.navigate("examenSangre")}>
            <View style={styles.box}>
              <Image source={require('../../assets/Images/jeringa.png')} />
            </View>
          </TouchableOpacity>
          {/*Examen Eletro*/}
          <TouchableOpacity
          onPress={()=> navigation.navigate("examenEletro")}>
            <View style={styles.box}>
              <Image source={require('../../assets/Images/core.png')} />
              
            </View>
          </TouchableOpacity>
        </View>
        {/* Doctores*/}
        <StyledText small   bold mt24 mb24>Doctores</StyledText>
        <View style= {styles.boxDoctores}>
          <View style={{flexDirection:"row" }}>
            <Image style={styles.imageDoctor} source= { require("../../assets/Images/doctor.png") } />
            <View style= {{flexDirection: "row", marginTop: 10, marginLeft: 6}}>
                            <Image  style={styles.icon} source= {require("../../assets/Images/star.png")}/>
                            <Image  style={styles.icon} source= {require("../../assets/Images/star.png")}/>
                            <Image  style={styles.icon} source= {require("../../assets/Images/star.png")}/>
                            <Image  style={styles.icon} source= {require("../../assets/Images/star.png")}/>
                            <Image  style={styles.icon} source= {require("../../assets/Images/star.png")}/>
                            <StyledText small primary>(4.7)</StyledText>
            </View> 
          </View>            
            <View>
            <View style= {{flexDirection: "row"}}>
              <StyledText smallExtra secondary poppinsBold >Doctor:</StyledText>
              <StyledText whiteText robotoRegular ml6>Marco</StyledText>
            </View>
            <View  style= {{flexDirection: "row"}}>
              <StyledText smallExtra secondary poppinsBold>Especialidad:</StyledText>
              <StyledText whiteText robotoRegular ml6>Cardiologista</StyledText>
            </View>
                                     
            </View>                 
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
      padding: 24,
      backgroundColor: "#DFF3EC"
     
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
  
  
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(64, 181, 144, 0.5)',
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
   boxExamenes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  //docotores
  boxDoctores:  {
    padding: 15,
    width: 210,
    height: 120,
    backgroundColor: 'rgba(64, 181, 144, 0.5)',
    borderRadius: 10,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 160,
    height: 160,
    backgroundColor: 'rgba(64, 181, 144, 0.5)',
    borderRadius: 10,
  }, 
  imageDoctor: {
   width: 30,
   height: 40
  }, 
  
});