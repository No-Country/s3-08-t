import { View, Text,  StyleSheet, Image, ScrollView } from 'react-native';
import StyledText from "../../styles/styleText";
import { CustomButton } from "../components/CustomButton" ;
import Footer from '../components/Footer';
import Greting from '../components/Greting';
import Calendario from './Calendario';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#DFF3EC",
      
     
    },
    image: {
        width: 70,
        height: 100,

    }

})

const ConfCita = () => {
        
    const handleConfirmar = (props) => {
        console.log("Confirmado")
    } 
   
    return (
    <> 
        <ScrollView>
        <View style={styles.container}>
           
            <Greting name= "Ezequiel"/>
            <StyledText medium  bold mt24>
                Informacion de la Cita
           </StyledText>
           <View style= {{marginBottom: 230, marginTop: 12}}>
           <StyledText medium secondary poppinsBold>Horario: <StyledText robotoRegular medium primary>08:00 </StyledText> </StyledText>
           <StyledText medium secondary poppinsBold>Fecha <StyledText robotoRegular medium primary>08:00 </StyledText> </StyledText>
           <StyledText medium secondary poppinsBold>Doctor: <StyledText robotoRegular  medium primary>Marco Souza </StyledText> </StyledText>
           <StyledText medium secondary poppinsBold>Especialidad: <StyledText robotoRegular  medium primary>Cardiologista</StyledText></StyledText>
           
           </View>
           <CustomButton 
           title='Confirmar Cita'
           onPress= {handleConfirmar}
           />
      
        </View>
        </ScrollView>
        <Footer />
        </>
    )
}

export default ConfCita