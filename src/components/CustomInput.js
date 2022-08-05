import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/colors';


export const CustomInput = (props) => {

  const {errors, title, placeholder} = props;
 
  return (
    <View style={styles.customInputContainer}>
        {/*<Text style={styles.customInputTitle}>{title}</Text>*/}
      <TextInput {...props} style={styles.customInputData}placeholder={placeholder}
       />
       <Text style={styles.textError}>{errors}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    customInputContainer:{
      width:'100%',
      paddingHorizontal:30,
      justifyContent:'center',
      marginVertical:3
      
          
    },
    customInputTitle:{
      fontFamily:'robotoBold',
      paddingHorizontal:10

    },
    customInputData:{
       paddingVertical:10,
       paddingHorizontal:20,
       backgroundColor:COLORS.primary,
       borderColor: COLORS.secondary,
       borderWidth:1,
       borderRadius:10,
       fontFamily:'robotoLight',
       fontSize:18
    },

    textError:{
      color:COLORS.error,
    }


})