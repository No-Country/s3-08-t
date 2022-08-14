import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";


export const HeaderPatient = (props) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}> 

                <Image style={styles.avatarPatient} source={require('../../assets/profileAvatar.png')}></Image>

                    <View style={{ flexDirection: 'column', alignItems:'flex-end'}}>
                        <Text>Buenas Noches,</Text>
                        <Text style={{fontWeight:"500"}}>{props.name}!</Text>
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
    }
})

