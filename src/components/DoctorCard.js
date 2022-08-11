import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';









export const DoctorCard = (porps) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styledCard}>



                    <Image style={styles.avatarDr} source={require('../../assets/doctor.png')}></Image>

                    <View>
                        <View>
                            <Text style={{ justifyContent: 'flex-start',  fontWeight: 500, }}>Doctor {porps.name}</Text>
                            <Text style={{ justifyContent: 'flex-start', width: 200 }}>Especialidad {porps.especialidad}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent:'space-evenly' }}>
                            <Icon name="clock-o" size={24} color="black" style={{marginTop:10}}  />
                            <Icon name="star-o" size={24} color="#FFAC4B" style={{marginTop:10}}  />
                        </View>
                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>
    )
}




const styledCard = {
    backgroundColor: '#F8F8FF',
    borderRadius: 15,
    padding: 2,
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 313,
    height:118,
    margin: 10,
   
    
}



const styles = StyleSheet.create({
    avatarDr: {
        marginTop:2,
        width: 77,
        height: 102,
        resizeMode: 'contain',
        borderRadius:56,
        

    },
})