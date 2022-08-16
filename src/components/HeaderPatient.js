import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";


export const HeaderPatient = (props) => {
    return (
        <SafeAreaView>
            <ScrollView>
<<<<<<< HEAD
                <View style={styles.headerStyled}> 
=======
                
               {/*<View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}> 
>>>>>>> d5d0434fbf67d22fcbc8ff1c0cd7a462d3519d59

                <Image style={styles.avatarPatient} source={require('../../assets/profileAvatar.png')}></Image>

                    <View style={styles.welocomeCtn}>
                        <Text>Buenas Noches,</Text>
<<<<<<< HEAD
                        <Text style={styles.boldText}>{props.name}!</Text>
=======
                        <Text style={{fontWeight:"500"}}>{props.name}!</Text>
>>>>>>> d5d0434fbf67d22fcbc8ff1c0cd7a462d3519d59
                    </View>
    </View>*/}
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

