import { View, Text, ScrollView, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react';
import { DoctorCard } from '../components/DoctorCard';
import { HeaderPatient } from '../components/HeaderPatient';
import Greting from '../components/Greting'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#F2F2F2",
     
    },
})

export const DoctorsCards = () => {
    return (

        <SafeAreaView>

            <ScrollView >
                <View style={styles.container}>
                    <Greting name='Ezequiel Sanchez'/>
                </View>
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