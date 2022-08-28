import React, {useState} from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet, TouchableOpacity, Text, Modal , Image} from 'react-native';
import {COLORS} from '../../styles/colors';
//import { Ionicons } from '@expo/vector-icons';
export const CustomSelector = ({
  data = [
     'PACIENTE',
     'DOCTOR',
      'ADMIN',
  ],
  selectedValue,
  setSelectedValue,
  withIcon = false,
  margin = false
}) => {

  const [visible, setVisible] = useState(false);

  const handleSelectedClick = (value) =>{
    console.log(value);
    setSelectedValue(value)
    setVisible(false);
  }

  return (
    <View style={margin? styles.container1 : styles.container}>
    <View style={styles.touchableOpacity} >
      <View style={styles.searchContainer}>
      <Text style={styles.customSelectorText}>{selectedValue}</Text>
      <TouchableOpacity
      style={styles.searchIcon}
      onPress={()=>setVisible(true)}>
        <Image style={{width:25, height:25}}source={require('../../assets/search/down-arrow.png')}></Image>
      </TouchableOpacity>
      </View>
      </View> 
       
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
          onPress={()=>handleSelectedClick(el)}
          style={{justifyContent:'center', alignItems:'center', marginHorizontal:20, padding:5 }}>
            <Text style={{fontSize:18}}>{el}</Text>
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
       marginBottom:15,
      
  },
  container1: {
   
    marginHorizontal:0,
    justifyContent:'center',
     marginBottom:15,
    
},

  
  searchContainer:{
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  searchIcon:{
    backgroundColor:COLORS.secondary,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    width:45,
    height:45,
    marginRight:8,
    borderRadius:15

  },

touchableOpacity:{
  borderRadius:10,
  backgroundColor:COLORS.primary,
  paddingVertical:8

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