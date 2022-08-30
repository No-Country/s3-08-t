
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React, {useEffect} from 'react';
import { DoctorCard } from '../components/DoctorCard';
import Greting from '../components/Greting'
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';





export const DoctorsCards = () => {
    const doctors = useSelector(state=>state.doctor.doctors);
    const {dni, name, img="https://media-exp1.licdn.com/dms/image/D4D35AQEce8GvFyg66A/profile-framedphoto-shrink_200_200/0/1650208419921?e=1662300000&v=beta&t=eYMKeC0kowgXgQhJfT7KZQ4q6dizfjvGw5SoZULH2Zs"} = useSelector(state=>state.user.sesionInfo.pat)


    return (


        <SafeAreaView>
            <ScrollView >
                <View style={styles.container}>
                <Greting name= {name} />
      
                </View>
                <View style={styles.titleCtn}>
                    <Text style={styles.title}>Marcar Citas {'>'} Especialidad {'>'} Doctor</Text>
                    
                </View>
                <View style={styles.cardsContainer}>
                  
                    {doctors.map(doctor =>
                        <DoctorCard key={doctor._id} id={doctor._id} name={doctor.doctorName} especialidad={doctor.type} source={{uri:doctor.user[0].img}} />
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
        
        width: 300,
        marginLeft: 10,
        
    },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#F2F2F2",

    },




})