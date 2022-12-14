
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import StyledText from '../../styles/styleText';
import DoctorCards from "../screens/DoctorsCards";
import Greting from '../components/Greting';
import Footer from '../components/Footer';

import { BackForwardButton } from '../components/BackForwardButton';

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
    square: {
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
    console.log('Entrando a Sobre Dr')
    console.log(props)
    return (
        <>
        <ScrollView style={styles.container}>
        <View >
            
            <Greting name= "Cesar Galeano"/>
            <View  style={{justifyContent: "center", alignItems:  "center"}}>
                <Image style={styles.image} source= { require("../../assets/Images/doctor.png") } />
            </View>
            <StyledText  medium bold mt24>
                {props.route.params.name}
           </StyledText>
           <StyledText robotoRegular small primary>
           {props.route.params.especialidad}
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
                    <StyledText medium bold mt24 capitalice>
                        {name}
                    </StyledText>
                    <StyledText robotoRegular small primary capitalice>
                        {doctorType}
                    </StyledText>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 12 }}>
                        {/*Square*/}
                        <View style={styles.square} >
                            <StyledText small secondary poppinsBold textAlignCenter >Rating: </StyledText>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Image style={styles.icon} source={require("../../assets/Images/star.png")} />
                                <Image style={styles.icon} source={require("../../assets/Images/star.png")} />
                                <Image style={styles.icon} source={require("../../assets/Images/star.png")} />
                                <Image style={styles.icon} source={require("../../assets/Images/star.png")} />
                                <Image style={styles.icon} source={require("../../assets/Images/star.png")} />
                                <StyledText small primary>(4.7)</StyledText>
                            </View>
                        </View>
                        {/*Square*/}
                        <View style={styles.square} >
                            <StyledText small secondary poppinsBold textAlignCenter >Experiencia</StyledText>
                            <StyledText small primary textAlignCenter>7 a??os</StyledText>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 12 }} >
                        <Image style={styles.icon} source={require("../../assets/Images/call.png")} />
                        <StyledText small primary>{phone}</StyledText>
                    </View>
                    <View>
                        <StyledText medium bold>
                            Sobre
                        </StyledText>
                        <StyledText robotoRegular small primary>
                            No dudes en realizar tu consulta conmigo si te encuentras en {city}, {country}. 
                            Mi consultorio se encuentra en la calle {address}.
                            Si necesitas comunicarte conmigo tambi??n puedes hacerlo a mi correo: {email}.
                        </StyledText>
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
                Ginecologo con 7 a??os de Experiencia, egresado de la Universidad San Marino.
                </StyledText>
                </View>
        </View>
        </ScrollView>
        <BackForwardButton forward={true} forwardNavigate="calendario"  />
        <Footer />

        </>
    )
}

export default SobreDr