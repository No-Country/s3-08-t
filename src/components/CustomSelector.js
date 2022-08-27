import React, {useState} from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native';
import {COLORS} from '../../styles/colors';
//import { Ionicons } from '@expo/vector-icons';
export const CustomSelector = ({
  data = [
    {
      id: '1',
      label: 'PACIENTE',
      value: true,
    },
    {
      id: '2',
      label: 'DOCTOR',
      value: false,
    },
    {
      id: '3',
      label: 'ADMIN',
      value: false,
    },
    

  ],
  selectedValue,
  setSelectedValue,
  withIcon = false,
}) => {

  const [visible, setVisible] = useState(false);

  const handleSelectedClick = (value) =>{
    console.log(value);
    setSelectedValue(value)
    setVisible(false);
  }

  return (
    <View style={styles.container}>
    <TouchableOpacity 
    style={styles.touchableOpacity}
    onPress={()=>setVisible(true)}>
      <Text style={styles.customSelectorText}>{selectedValue}</Text>
      </TouchableOpacity> 
       
      <Modal
      transparent={true}
      visible={visible}
      animationType='slide' 
      nRequestClose ={()=>setVisible(false)}
      
       >
        <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
        {data.map((el, index)=>(
          <TouchableOpacity 
          key={index}
          onPress={()=>handleSelectedClick(el.label)}
          style={{justifyContent:'center', alignItems:'center', marginHorizontal:20, padding:5 }}>
            <Text style={{fontSize:18}}>{el.label}</Text>
          </TouchableOpacity>
        ))
        }
        </View>
       </View>
       </Modal>
       
       </View>
          
  );
};



const styles = StyleSheet.create({
  container: {
      marginHorizontal:30,
      justifyContent:'center',
      marginBottom:15
      
      
        
  },
  
touchableOpacity:{
  borderRadius:10,
  borderColor:COLORS.secondary,
  borderWidth:1,
  backgroundColor:COLORS.primary,
  paddingVertical:3

},
modalContainer:{
  flex:1,
    backgroundColor:'#000000AA',
    justifyContent:'center',
    alignItems:'center'
    
  },
modalBox:{

backgroundColor:'white',
justifyContent:'center',
height:200,
width:300,
borderRadius:15


},
customSelectorText:{
paddingHorizontal:20,
paddingVertical:10,
fontFamily:'robotoLight',
fontSize:18,
color:'grey'
},

 
});