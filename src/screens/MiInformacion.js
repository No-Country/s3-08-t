import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Greting from '../components/Greting';
import StyledText from '../../styles/styleText';
import {useSelector} from 'react-redux';
import { CustomButton } from '../components/CustomButton';
import { COLORS } from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Footer';

import { useDispatch } from 'react-redux';
import { cleanUser } from '../redux/features/user/userSlice';

export const MiInformacion = () => {
    const {dni, name, email, phoneNumber, address, city, country, uid, img="https://media-exp1.licdn.com/dms/image/D4D35AQEce8GvFyg66A/profile-framedphoto-shrink_200_200/0/1650208419921?e=1662300000&v=beta&t=eYMKeC0kowgXgQhJfT7KZQ4q6dizfjvGw5SoZULH2Zs"} = useSelector(state=>state.user.sesionInfo.pat)
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleClickLogout = () => {
        dispatch(cleanUser());
        };
    return (
    <>
    <ScrollView>
    <View style= {styles.container}>
    <View style={{flex:1, marginTop:40, marginHorizontal:10}}>
      <Greting name= {name} img={"https://media-exp1.licdn.com/dms/image/D4D35AQEce8GvFyg66A/profile-framedphoto-shrink_200_200/0/1650208419921?e=1662300000&v=beta&t=eYMKeC0kowgXgQhJfT7KZQ4q6dizfjvGw5SoZULH2Zs"}/>
      <StyledText medium  bold mt24 mb24 >Mi Informacion</StyledText>      
      </View>
      {/*<Image style={styles.image} source= { img? {uri: img} : require( "../../assets/Images/profile.png") } />*/}
        
            <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Nombre: </Text>
            <Text>{name}</Text>
            </View>
            <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Documento: </Text>
            <Text>{dni}</Text>
            </View>
            <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Email: </Text>
            <Text>{email}</Text>
            </View>
            <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Direccion: </Text>
            <Text>{address}</Text>
            </View>
            <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Ciudad: </Text>
            <Text>{city}</Text>
            </View>
            <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Pais: </Text>
            <Text>{country}</Text>
            </View>
            <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Telefono: </Text>
            <Text>{phoneNumber}</Text>
            
            <TouchableOpacity 
            style= {[styles.button,styles.row]}
            onPress={handleClickLogout} >
                <Text style={styles.fieldLabel}>Logout </Text>
                <Image style={styles.icon} source= { require("../../assets/login/logout.png") }/>
                
            </TouchableOpacity>
            
            </View>

            <CustomButton title='Editar' onPress={()=>console.log('Editando Info')} backColor={COLORS.secondary} colorText={COLORS.white} />
            
 
    </View>
    </ScrollView>
    <Footer/>
    </>
  )
}

const styles = StyleSheet.create({
    image:{
        width:70,
        height:70,
        borderRadius:50,
        marginHorizontal:20,
        marginVertical:10
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginVertical:10,
        marginHorizontal:15,

    },
    fieldContainer:{
        marginHorizontal:15,        
        marginVertical:5
    },
    fieldLabel:{
        fontSize:18,
        fontWeight:'bold'
    },
    fieldText:{
        fontSize:16,
        
    },
    icon: {
        width: 30,
        height: 30
    },
     row: {
        flexDirection: "row"
     }



});