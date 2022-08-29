import React from 'react';
import { Switch, ScrollView, StyleSheet, Text, View,Image } from 'react-native';
import Footer from '../components/Footer';
import Greting from "../components/Greting";
import image from "../../assets/Images/pulseRate.png";
import StyledText from "../../styles/styleText";


const eletro = [
    {
        image: "../../assets/Images/pulseRate.png", 
        rate: "104bpm"
    }
]
const Item = ({ image , rate}) => (
    <View style= {styles.box} >
      <StyledText medium secondary poppinsBold>{nombre}</StyledText>
      
    </View>
  );
const ExamenEletro = () => {
    return(
      <>
      <ScrollView>
      <View style={styles.container}>
        <Greting name= "Ezequiel"/>
          <View >
              <StyledText medium  bold mt24 mb24>
                      Examen de Coracion
              </StyledText>
          </View>
        </View>
      </ScrollView>
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
        flexDirection: "row",
        
    },
    image: {
        width: 60,
        height: 100
    }

})

export default  ExamenEletro
