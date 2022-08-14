
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/colors'

export const CustomButton = (props) => {
    const {title, onPress} = props
  return (
    <TouchableOpacity
    {...props}
    onPress={onPress}
    style={styles.customButtonContainer}>
     <Text style={styles.customButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    customButtonContainer:{
        backgroundColor:COLORS. secondary,
        justifyContent:'center',
         marginHorizontal:50,
         borderRadius:20,
         alignItems:'center',
         marginVertical:30,
         paddingVertical:10
    },
    customButtonText:{
        color:COLORS.white,
        fontSize:22,
        fontFamily:'robotoLight'
    },
});

