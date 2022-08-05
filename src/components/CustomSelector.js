import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const CustomSelector = ({
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
    }
  ],
  selectedValue,
  setSelectedValue,
  withIcon = false,
}) => {

  return (
    <View style={Styles.container}>
      {withIcon && <Ionicons name="ellipse" style={Styles.icon} />}
      <View style={Styles.selector}>
        <Picker
          style={[Styles.picker, withIcon && Styles.pickerWithIcon]}
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

export default Selector;
