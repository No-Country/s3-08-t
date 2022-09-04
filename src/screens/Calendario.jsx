import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal,  ScrollView} from 'react-native';
import Footer from '../components/Footer';
import {Calendar} from 'react-native-calendars';
import Greting from '../components/Greting'
import StyledText from '../../styles/styleText';
import HoraCita from '../components/HoraCita';
import * as RootNavigation  from "../../RootNavigation";
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { getDoctors, getDoctorTypes } from '../redux/features/doctor/doctorActions';
import { registerInquiry } from '../redux/features/inquiry/inquiryActions';


const Calendario = (props) => {
  const dispatch = useDispatch();
  const {dni, name, img="https://media-exp1.licdn.com/dms/image/D4D35AQEce8GvFyg66A/profile-framedphoto-shrink_200_200/0/1650208419921?e=1662300000&v=beta&t=eYMKeC0kowgXgQhJfT7KZQ4q6dizfjvGw5SoZULH2Zs"} = useSelector(state=>state.user.sesionInfo.pat)
  const selectedDoctor = useSelector(state=>state.doctor.selectedDoctor);
  const selectedPatient = useSelector(state=>state.patient.selectedPatient); 
  const selectedSpeciality = useSelector(state=>state.inquiry.selectedSpeciality); 

  
  const [selectedDate, setSelectedDate] = useState();
  const [selectedHour, setSelectedHour] = useState();

  const clearDate = () => {
    setSelectedDate(null);
    setSelectedHour(null);
  }

  const confirm = () => {
    console.log(selectedDate, selectedHour)
    //props.setDateSelectedFunction({
    //  'date': selectedDate.dateString,
    //  'hour': selectedHour
    //});

    
      
    dispatch(registerInquiry(
      {
        patient: {
        _id: selectedPatient
      },
      doctor: {
        _id: selectedDoctor.id
      },
      dateInquiry: "20-10-2022 8:30 AM"
    }
    ))
    RootNavigation.navigate("ConfirmaCita",{date:selectedDate, hour:selectedHour});
  }

  var today = new Date().toISOString().split('T')[0];
  const markedDatesMy = {};
  markedDatesMy[today] = {selected: true, marked: true, selectedColor: '#028960'};


  return (
    <>
    <ScrollView style={styles.container}>
      <Greting name= {name}/>
      <StyledText medium  bold mt24>Fechas disponibles</StyledText>

      <View  style={[styles.center]}>
          {!selectedDate && (
            <Calendar style= {{borderRadius: 10, elevation: 4, margin: 40}}
            onDayPress= {date => {
              console.log(date);
              console.log('MD: ', markedDatesMy);
              setSelectedDate(date);
            }}
            initialDate = {today}
            minDate= {today}
            maxDate= {"2022-12-31"}
            //disableArrowLeft={true}
            markedDates = {markedDatesMy}
            />
          )}

          {selectedDate && !selectedHour && (
            <HoraCita onPressFunction={setSelectedHour}/>
          )}

          {selectedDate && selectedHour && (
            <>
              <View style= {{marginBottom: 230, marginTop: 12}}>
                  <StyledText medium secondary poppinsBold>Fecha:<StyledText robotoRegular medium primary> {selectedDate?.dateString} </StyledText> </StyledText>
                  <StyledText medium secondary poppinsBold>Horario: <StyledText robotoRegular medium primary>{selectedHour}</StyledText> </StyledText>
                  <StyledText medium secondary poppinsBold>Doctor: <StyledText robotoRegular  medium primary>{selectedDoctor.name} </StyledText> </StyledText>
                  <StyledText medium secondary poppinsBold>Especialidad: <StyledText robotoRegular  medium primary>{selectedSpeciality}</StyledText></StyledText>
                <TouchableOpacity onPress= {clearDate} style={[styles.box, styles.center,styles.mt24]}>
                    <Text style= {{fontSize: 25, color: "white"}}>Cambiar Fecha</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress= {confirm} style={[styles.box, styles.center,styles.mt24, styles.colorVerde]}>
                    <Text style= {{fontSize: 25, color: "white"}}>Confirmar</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
      </View>
    </ScrollView>
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
  boxHora: {
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
  }, 
  colorVerde: {
    backgroundColor: "#037A56"
  }
  
})
export default Calendario;
