import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";


export const HeaderPatient = (props) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.headerStyled}> 

                <Image style={styles.avatarPatient} source={require('../../assets/profileAvatar.png')}></Image>

                    <View style={styles.welocomeCtn}>
                        <Text>Buenas Noches,</Text>
                        <Text style={styles.boldText}>{props.name}!</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    avatarPatient:{
        width:42,
        height:72,
        borderRadius:50,
        margin:10
    },

    headerStyled:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },

    welocomeCtn:{ 
        flexDirection: 'column',
        alignItems:'flex-end'
    },

    boldText:{
        fontWeight:500,
        }

    


})

