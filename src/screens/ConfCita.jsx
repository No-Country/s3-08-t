import { View, Text,  StyleSheet, Image } from 'react-native';
import StyledText from "../../styles/styleText";
import { CustomButton } from "../components/CustomButton" ;
import Header from '../components/Greting';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#F2F2F2",
     
    },
    image: {
        width: 70,
        height: 100,

    }

})

const ConfCita = () => {
        
    const handleConfirmar = () => {
        console.log("Confirmado")
    } 
   
    return (
        <View style={styles.container}>
            <Header/>
            <StyledText medium  bold mt24>
                Informacion de la Cita
           </StyledText>
           <View>
           <StyledText medium secondary poppinsBold>Horario: <StyledText robotoRegular medium primary>08:00 </StyledText> </StyledText>
           <StyledText medium secondary poppinsBold>Doctor: <StyledText robotoRegular  medium primary>Marco Souza </StyledText> </StyledText>
           <StyledText medium secondary poppinsBold>Especialidad: <StyledText robotoRegular  medium primary>Cardiologista</StyledText></StyledText>
           <CustomButton
           title='Confirmar Cita'
           onPress= {handleConfirmar}
           />

           </View>
           

      
        </View>
    )
}

export default ConfCita