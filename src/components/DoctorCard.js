import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';







export const DoctorCard = (porps) => {

    return (



        <SafeAreaView>
            <ScrollView>
                <View style={styles.styledCard}>
                    <Image style={styles.avatarDr} source={require('../../assets/doctor.png')}></Image>
                    <View>
                        <View>
                            <Text style={styles.boldDoctorText}>Doctor {porps.name}</Text>
                            <Text style={styles.doctorTypeText}>Especialidad {porps.especialidad}</Text>
                        </View>

                        <View style={styles.iconBox}>
                            <Icon name="clock-o" size={24} color="black" style={styles.icons} />
                            <Icon name="star-o" size={24} color="#FFAC4B" style={styles.icons} />
                        </View>
                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>
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
        fontWeight: 500,
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