import { View, Text,  StyleSheet, Image, ScrollView } from 'react-native';
import StyledText from "../../styles/styleText";
import { CustomButton } from "../components/CustomButton" ;
import Footer from '../components/Footer';
import Greting from '../components/Greting';
import Calendario from './Calendario';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const ConfCita = (props) => {
    const {dni, name, email, phoneNumber, address, city, country, uid, img="https://media-exp1.licdn.com/dms/image/D4D35AQEce8GvFyg66A/profile-framedphoto-shrink_200_200/0/1650208419921?e=1662300000&v=beta&t=eYMKeC0kowgXgQhJfT7KZQ4q6dizfjvGw5SoZULH2Zs"} = useSelector(state=>state.user.sesionInfo.pat)
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleClickLogout = () => {
        dispatch(cleanUser());
        }; 
    const handleConfirmar = (props) => {
        console.log("Confirmado")
    } 
   
    return (
    <> 
        <ScrollView style={styles.container}>
            <View >
            
                <Greting name= {name}/>
            
                <View style={styles.box1}>
                    <StyledText medium  bold mt24 mb24 textAlignCenter>
                            Cita Confirmada
                    </StyledText>
                    <Image  style={styles.image} source= {require("../../assets/Images/check.png")}/>
                </View>
                <View style= {{marginTop: 12}}>
                <StyledText medium secondary poppinsBold>Fecha: <StyledText robotoRegular medium primary>{'05-09-22'} </StyledText> </StyledText>
                <StyledText medium secondary poppinsBold>Horario: <StyledText robotoRegular medium primary>{'14:00'} </StyledText> </StyledText>
                <StyledText medium secondary poppinsBold>Doctor: <StyledText robotoRegular  medium primary>Joshua Agudelo </StyledText> </StyledText>
                <StyledText medium secondary poppinsBold>Especialidad: <StyledText robotoRegular  medium primary>Ginecologo</StyledText></StyledText>
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
      backgroundColor: "#DFF3EC",
      padding: 24,
      
     
    },
    image: {
        width:180,
        height: 180,

    },
    box1: {
        justifyContent: "center",
        alignItems: "center"
    }

})

export default ConfCita