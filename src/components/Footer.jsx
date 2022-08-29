import { View, Text,  StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as RootNavigation  from "../../RootNavigation";
import React from "react";
import { useDispatch } from 'react-redux';
import { cleanUser } from '../redux/features/user/userSlice';




const Footer = () => {
    const dispatch = useDispatch();
    const handleClickLogout = () => {
        dispatch(cleanUser());
        };

    return (
        <View style={styles.footer}>
            {/*HISTORIAL*/ }
            <TouchableOpacity 
            style= {styles.button}
            onPress={()=> RootNavigation.navigate("miInformacion")} >
               <Image style={styles.icon} source= { require("../../assets/Images/account.png") }/>
            </TouchableOpacity>
            {/*ADD CITA*/ }
            <TouchableOpacity 
            style= {styles.button}
            onPress={()=> RootNavigation.navigate("marcarCita")} >
                <Image style={styles.icon} source= { require("../../assets/Images/addNew.png") }/>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.button}
            onPress={()=> RootNavigation.navigate("ConfirmaCita")} >
                <Image style={styles.icon} source= { require("../../assets/Images/calendar.png") }/>
            </TouchableOpacity>

            <TouchableOpacity 
            style= {styles.button}
            onPress={()=> RootNavigation.navigate("calendario")} >
                <Image style={styles.icon} source= { require("../../assets/Images/calendar.png") }/>
            </TouchableOpacity>

            <TouchableOpacity 
            style= {styles.button}
            onPress={handleClickLogout} >
                <Image style={styles.icon} source= { require("../../assets/login/logout.png") }/>
            </TouchableOpacity>

        </View>
    )
}

const styles= StyleSheet.create({
footer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    borderRadiusLeft: 20
    

},
button: {
    padding: 20,
},
icon: {
    width: 30,
    height: 30
}

})

export default Footer