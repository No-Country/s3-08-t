import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal,  ScrollView } from 'react-native';
import Footer from '../components/Footer';
import {Calendar} from 'react-native-calendars';
import Greting from '../components/Greting'
import StyledText from '../../styles/styleText';

const Calendario = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  var today = new Date().toISOString().split('T')[0];
  const markedDatesMy = {};
  markedDatesMy[today] = {selected: true, marked: true, selectedColor: '#028960'};


  return (
    <>
    <ScrollView style={styles.container}>
      <Greting name= "Ezequiel Sanches"/>
      <StyledText medium  bold mt24>Fechas disponibles</StyledText>
    <View  style={[styles.center]}>
      
      <TouchableOpacity onPress= {() =>  setShowCalendar(true) } style={[styles.box, styles.center,styles.mt24]}>
        <Text style= {{fontSize: 25, color: "white"}}>Dias disponibles</Text>
      </TouchableOpacity>
      <Modal visible= {showCalendar} animationType= "fade">
        <Calendar style= {{borderRadius: 10, elevation: 4, margin: 40}}
        onDayPress= {date => {
          console.log(date);
          console.log('MD: ', markedDatesMy);

          setSelectedDate(date);
          setShowCalendar(false);
        }}
        initialDate = {today}
        minDate= {today}
        maxDate= {"2022-12-31"}
        //disableArrowLeft={true}
        markedDates = {markedDatesMy}
        />
      </Modal>
      
      
    </View>
    <View style= {{marginBottom: 230, marginTop: 12}}>
        <StyledText medium secondary poppinsBold>Fecha:<StyledText robotoRegular medium primary> {selectedDate?.dateString} </StyledText> </StyledText>
        <StyledText medium secondary poppinsBold>Horario:<StyledText robotoRegular medium primary>08:00 </StyledText> </StyledText>
        <StyledText medium secondary poppinsBold>Doctor: <StyledText robotoRegular  medium primary>Marco Souza </StyledText> </StyledText>
        <StyledText medium secondary poppinsBold>Especialidad: <StyledText robotoRegular  medium primary>Cardiologista</StyledText></StyledText>
      </View>    </ScrollView>
    <Footer/>
    </>
        
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#DFF3EC",
    
   
  },
  box: {
    backgroundColor: "#9FDAC7",
    borderRadius: 10,
    width: 300,
    padding: 10, 
    alignItems: "center"

  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  mt24: {
    marginTop: 24,
  }
})
export default Calendario
