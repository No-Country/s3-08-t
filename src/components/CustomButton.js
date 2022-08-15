
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/colors'

export const CustomButton = (props) => {
    const {title, onPress, backColor, colorText} = props
  return (
    <TouchableOpacity
    {...props}
    onPress={onPress}
    style={[styles.customButtonContainer, backColor]}>
     <Text style={[styles.customButtonText, colorText]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    customButtonContainer:{
        backgroundColor:COLORS.secondary,
        justifyContent:'center',
         marginHorizontal:50,
         borderRadius:20,
         alignItems:'center',
         marginVertical:10,
         paddingVertical:10
    },
    customButtonText:{
        color:COLORS.white,
        fontSize:22,
        fontFamily:'robotoBold'
    },
});

