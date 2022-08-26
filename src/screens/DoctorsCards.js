
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'



import React, {useEffect} from 'react';
import { DoctorCard } from '../components/DoctorCard';


import Greting from '../components/Greting'
import Footer from '../components/Footer';






export const DoctorsCards = () => {

    const [doctors, setDoctors] = React.useState([])
    const doctorsEndpont = 'https://app-healtconnect.herokuapp.com/api/doctor/';

    useEffect(() => {
        fetch(doctorsEndpont)
            .then(response => response.json())
            .then(response => {
                setDoctors([...response.userDoctor])
                console.log(response.userDoctor)
            })
    }, [])

    console.log(doctors)

    return (


        <SafeAreaView>
            <ScrollView >
                <View style={styles.container}>
                    <Greting name='Ezequiel Sanchez' />
                </View>
                <View style={styles.titleCtn}>
                    <Text style={styles.title}>Marcar Citas {'>'} Especialidad {'>'} Doctor</Text>
                </View>
                <View style={styles.cardsContainer}>
                    
                    {doctors.map(doctors =>
                        <DoctorCard key={doctors._id} id={doctors._id} name={doctors.doctorName} especialidad={doctors.type} source={{uri:doctors.user[0].img}} />
                    )

                    }
                    
                </View>

            </ScrollView>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    titleCtn: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10
    },

    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "500"
    },

    cardsContainer: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        marginLeft: 10
    },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#F2F2F2",

    },




})