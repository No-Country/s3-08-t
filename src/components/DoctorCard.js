import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { selectPatient } from '../redux/features/patient/patientSlice';
import { selectDoctor } from '../redux/features/doctor/doctorSlice';












export const DoctorCard = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    

    const handleNavigation = async()=>{
        await dispatch(selectDoctor({
            id:props.id,
            name:props.name,
            type:props.especialidad
        }));
        console.log(props.id)

        navigation.navigate("sobreDr",props.id)
    };
    
    return (

        <TouchableOpacity onPress={handleNavigation}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.styledCard}>
                        <Image style={styles.avatarDr} source={props.source} />
                        <View>
                            <View>
                                <Text style={styles.boldDoctorText}>Doctor {props.name}</Text>
                                <Text style={styles.doctorTypeText}>Especialidad {props.especialidad}</Text>
                                <Text style={styles.doctorTypeText}>Doctor Id {props.id}</Text>                                
                            </View>

                            <View style={styles.iconBox}>
                                <Icon name="clock-o" size={24} color="black" style={styles.icons} />
                                <Icon name="star-o" size={24} color="#FFAC4B" style={styles.icons} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </TouchableOpacity>    
    )
}


const styles = StyleSheet.create({
    avatarDr: {
        marginTop: 2,
        width: 77,
        height: 102,
        resizeMode: 'contain',
        borderRadius: 56,
    },


    styledCard: {
        backgroundColor: '#F8F8FF',
        borderRadius: 15,
        padding: 2,
        margin: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 313,
        height: 118,
        margin: 10,
    },

    boldDoctorText: {
        justifyContent: 'flex-start',
        fontWeight: "500",
    },

    doctorTypeText: {
        justifyContent: 'flex-start',
        width: 200
    },

    iconBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    icons: {
        marginTop: 10
    }



})