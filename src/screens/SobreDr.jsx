import { View, StyleSheet, Image,ScrollView, } from 'react-native';
import StyledText from '../../styles/styleText';
import DoctorCards from "../screens/DoctorsCards";
import Greting from '../components/Greting';
import Footer from '../components/Footer';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#DFF3EC"
     
    },
    image: {
        width: 70,
        height: 100,

    },
    square:  {
        width: 160,
        height: 80,
        borderRadius: 18,
        backgroundColor: "rgba(64, 181, 144, 0.27)",
        padding: 5,
       
        
       
        

    },
    icon: {
        width: 24,
        height: 24, 
        
    },
    mt24: {
        marginTop: 24

    },
    

})

const SobreDr = (props) => {
    return (
        <>
        <ScrollView style={styles.container}>
        <View >
            
            <Greting name= "Ezequiel"/>
            <View  style={{justifyContent: "center", alignItems:  "center"}}>
                <Image style={styles.image} source= { require("../../assets/Images/doctor.png") } />
            </View>
            <StyledText  medium bold mt24>
                Dr. Marco Souza
           </StyledText>
           <StyledText robotoRegular small primary>
            Cardiologista
            </StyledText>
            <View style={{flexDirection: "row",justifyContent:"space-around", marginTop: 12}}>
                {/*Square*/}
                <View  style= {styles.square} >
                    <StyledText small secondary poppinsBold textAlignCenter >Rating: </StyledText>
                    <View style= {{flexDirection: "row", justifyContent: "center"}}>
                        <Image  style={styles.icon} source= {require("../../assets/Images/star.png")}/>
                        <Image  style={styles.icon} source= {require("../../assets/Images/star.png")}/>
                        <Image  style={styles.icon} source= {require("../../assets/Images/star.png")}/>
                        <Image  style={styles.icon} source= {require("../../assets/Images/star.png")}/>
                        <Image  style={styles.icon} source= {require("../../assets/Images/star.png")}/>
                        <StyledText small primary>(4.7)</StyledText>
                    </View>
                </View>
                {/*Square*/}
                <View  style= {styles.square} >
                    <StyledText small secondary poppinsBold textAlignCenter >Experiencia</StyledText>
                        <StyledText small primary textAlignCenter>7 años</StyledText>
                    </View>
                </View>
                <View style= {{flexDirection: "row", marginLeft: 5, marginTop: 12}} >
                    <Image style={styles.icon} source= { require("../../assets/Images/call.png") }/>
                    <StyledText small primary>(000)56202020</StyledText>
                </View>
                <View>
                <StyledText  medium bold>
                   Sobre
                </StyledText>
                <StyledText robotoRegular small primary>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </StyledText>
                </View>
        </View>
        </ScrollView>
        <Footer />
        </>
    )
}

export default SobreDr