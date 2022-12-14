import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../styles/colors';

export const BackForwardButton = ({back, backNavigate, forward, forwardNavigate, route={} })=>{
    const navigation = useNavigation();
    
    return(
        
        <TouchableOpacity
      style={back? styles.containerBack : styles.containerForward }
      onPress={back? ()=>navigation.navigate(backNavigate): ()=>navigation.navigate(forwardNavigate, route)}>
        <Image style={styles.img} source={require('../../assets/search/down-arrow.png')}></Image>
        
      </TouchableOpacity>
      
    );
    
};




const styles = StyleSheet.create({
    
  
    containerBack:{
      backgroundColor:COLORS.secondary,
      justifyContent:'center',
      alignSelf:'center',
      alignItems:'center',
      width:45,
      height:45,
      marginRight:8,
      borderRadius:15,
      transform: [{rotate: '90deg'}],
      position: 'absolute',
        left:10,
        bottom: 80
      
      },

      containerForward:{
        backgroundColor:COLORS.secondary,
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        width:45,
        height:45,
        marginRight:8,
        borderRadius:15,
        transform: [{rotate: '-90deg'}],
        position: 'absolute',
        right:10,
        bottom: 80
        },


    
    img:{
        width:25,
        height:25,
        
    }

    
  
   
  });



