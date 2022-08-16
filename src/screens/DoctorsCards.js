import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react';
import { DoctorCard } from '../components/DoctorCard';
import { HeaderPatient } from '../components/HeaderPatient';







export const DoctorsCards = () => {

   


    return (

        <SafeAreaView>

            <ScrollView>

                <HeaderPatient name='Ezequiel Sanchez' />

                <View style={styles.titleCtn}>
                    <Text style={styles.title}>Marcar Citas {'>'} Especialidad {'>'} Doctor</Text>
                </View>
                <View style={styles.cardsContainer}>
                    <DoctorCard name='Cesar Galeano Torres ' especialidad='Cardiologo' />
                    <DoctorCard name='Jaime Agudelo' especialidad='Neumonologo' />
                    <DoctorCard name='Italo' especialidad='Traumatologo' />
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
        fontWeight: 500
    },

    cardsContainer: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        marginLeft: 10
    },




})