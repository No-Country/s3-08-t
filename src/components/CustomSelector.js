import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet } from 'react-native';
import {COLORS} from '../../styles/colors';
//import { Ionicons } from '@expo/vector-icons';
export const CustomSelector = ({
  data = [
    {
      id: '1',
      label: 'Paciente',
      value: true,
    },
    {
      id: '2',
      label: 'Doctor',
      value: false,
    },
    

  ],
  selectedValue,
  setSelectedValue,
  withIcon = false,
}) => {

  return (
    <View style={styles.container}>
      {/*withIcon && <Ionicons name="ellipse" style={Styles.icon} />*/}
      <View style={styles.selector}>
        <Picker
          style={styles.picker}
          selectedValue={selectedValue}
          onValueChange={(optionValue) => {
            setSelectedValue(optionValue);
          }}
         
        >
          {data.map((option) => (
            <Picker.Item key={option.id} label={option.label} value={option.value} style={{
              fontFamily: 'poppins-medium',
              fontSize: 18,
            }} />
          ))}
        </Picker>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    width:'100%',
      paddingHorizontal:30,
      justifyContent:'center',
      
  },
  selector: {
    fontFamily:'sans-serif', 
      fontSize:18,
      paddingHorizontal:20,
      backgroundColor:COLORS.primary,
      borderColor: COLORS.secondary,
      borderWidth:1,
      borderRadius:10,
  },
  picker: {
    position: 'relative',
  },
  pickerWithIcon: {
    left: 15,
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    fontSize: 20,
    color: COLORS.black,
  }
});
