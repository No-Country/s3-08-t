
import { View, Text, StyleSheet, TextInput, Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../styles/colors';




export const CustomInputWithIcon = (props) => {
    
  const {errors, title, placeholder, toggleIcon, setToggleIcon} = props;

  const handleView = ()=>{
    setToggleIcon(!toggleIcon);
  };
 
  return (
    <View>
    <View style={styles.customInputBox}>
        {/*<Text style={styles.customInputTitle}>{title}</Text>*/}
      <TextInput {...props} style={styles.customInputData}placeholder={placeholder} />
       <TouchableOpacity style={styles.customInputImageBox} onPress={handleView}>
       <Image  style={styles.customInputIcon} source={toggleIcon? require('../../assets/login/noteye.png') : require('../../assets/login/eye.png')} />
       </TouchableOpacity>
       </View>
       <Text style={styles.textError}>{errors}</Text>
    
    </View>
  )
}


const styles = StyleSheet.create({
    customInputBox:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:3,
      borderColor: COLORS.secondary,
      borderWidth:1,
      borderRadius:10,
      paddingVertical:10,
      paddingLeft:20,
      paddingRight:50,
      marginHorizontal:30,
      backgroundColor:COLORS.primary,
       
    },
    customInputTitle:{
      fontFamily:'robotoLight',
      paddingHorizontal:10,
      

    },
    customInputData:{
      fontFamily:'robotoLight', 
      fontSize:18,
      borderWidth:0,
      width:'100%'
      
      
       
    },
    

    textError:{
      color:COLORS.error,
      paddingHorizontal:30,

    },

    customInputIcon:{
      height:30,
      width:30,
      paddingHorizontal:10,
      
    },

    customInputImageBox:{
       marginRight:30 
    }



})