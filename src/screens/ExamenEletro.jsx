import React from 'react';
import { Switch, ScrollView, StyleSheet, Text, View,Image } from 'react-native';
import Footer from '../components/Footer';
import Greting from "../components/Greting";
import image from "../../assets/Images/pulseRate.png";
import StyledText from "../../styles/styleText";


const ExamenEletro = () => {
    return(
      <>
      <ScrollView>
      <View style={styles.container}>
        <Greting name= "Ezequiel"/>
          <View >
              <StyledText medium  bold mt24 mb24>
                      Examen de Corazón
              </StyledText>
              <StyledText small secondary poppinsBold >Eletrocardiagrama</StyledText>
          </View>
          <View style= {styles.boxImage}>
            <Image style= {styles.imgEletro} source={require("../../assets/Images/pulseRate.png")}/>
            <StyledText robotoRegular medium primary>180bpm</StyledText>
          </View>
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
        flexDirection: "row",
        
    },
    image: {
        width: 60,
        height: 100
    }, 
    imgEletro:  {
      width: 360,
      height: 120


    },
    boxImage: {
      padding: 10
    }

})


export default  ExamenEletro
