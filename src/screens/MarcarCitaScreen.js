import { View, Text, Image, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, {useEffect, useState} from 'react'
import Footer from '../components/Footer';
import Greting from '../components/Greting'
import StyledText from '../../styles/styleText';
import { CustomButton } from '../components/CustomButton';
import { COLORS } from '../../styles/colors';
import { CustomInputWithIcon } from '../components/CustomInputWithIcon';
import { useSelector, useDispatch} from 'react-redux';
import { CustomInput } from '../components/CustomInput';
import { CustomSelector } from '../components/CustomSelector';


export const MarcarCitaScreen = () => {
  const dispatch= useDispatch();
  const {name, } = useSelector(state=> state.user.sesionInfo.pat);
  const [selectedSpec, setSelectedSpec] = useState('buscar especialidad');
  
  

  return (
    <>
        <View style={styles.container}>
           <View style={{flex:1 }}>
            <Greting name= {name}/>
            <StyledText medium bold mt24>
                {"Marcar Citas > Especialidad"}
           </StyledText>
          
            <View style={{marginTop:20}}>
           <CustomSelector margin selectedValue={selectedSpec} setSelectedValue={setSelectedSpec} />
           </View>
           </View>
           
            
            
           
           
        </View>
        
        <Footer />
        </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent:'space-between'
    
   
  },
  image: {
      width: 70,
      height: 100,

  }

})


