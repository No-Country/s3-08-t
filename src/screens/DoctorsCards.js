import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react';
import { DoctorCard } from '../components/DoctorCard';
import { HeaderPatient } from '../components/HeaderPatient';




export const DoctorsCards = () => {
    return (

        <SafeAreaView>

            <ScrollView>

                <HeaderPatient name='Ezequiel Sanchez'/>

                <View style={{ width: 300,justifyContent: 'center', alignItems: 'center', marginTop: 10, marginLeft:10 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center',  fontWeight:"500" }}>Marcar Citas {'>'} Especialidad {'>'} Doctor</Text>
                </View>
                <View style={{ width: 300, justifyContent: 'center', alignItems:'center', width:300, marginLeft:10 }}>
                    <DoctorCard name='Cesar Galeano Torres ' especialidad='Cardiologo' />
                    <DoctorCard name='Jaime Agudelo' especialidad='Neumonologo' />
                    <DoctorCard name='Italo' especialidad='Traumatologo' />
                </View>

            </ScrollView>

        </SafeAreaView>

    )
}