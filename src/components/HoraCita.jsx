import { useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity,SectionList, Image} from 'react-native';
import StyledText from '../../styles/styleText';
import {useSelector} from 'react-redux';


const DATA = [
    {
       title: "Manaña", 
        data: ["08:00", "10:00", "12:00"],
    },
    {
        title: "Tarde",
        data: ["14:00", "16:00", "18:00"],
    },
    {
        title: "Noche",
        data: ["20:00", "21:00"],
    }
];

const Item = ({ title, onPressFunction }) => {
    return (
    <View style={styles.boxHora}>
      <TouchableOpacity onPress={() => onPressFunction(title)}>
        <StyledText medium secondary poppinsBold >{title}</StyledText>
      </TouchableOpacity>
    </View>
    )
    };

const HoraCita = (props) => {
   
    return (
            <View style= {{flexDirection: "row", marginBottom: 5}}>
            <SectionList style= {{flexDirection: "row"}}
                vertical={true}
                sections={DATA}
                keyExtractor= {(item,index)=> item + index}
                renderItem = {({item}) => <Item title={item} onPressFunction={props.onPressFunction}/>}
                renderSectionHeader= {({section: { title }})=>(
                <StyledText medium secondary poppinsBold flex1>{title}</StyledText>
                
                )}
            >
            </SectionList>
            </View>
        )
}

const styles = StyleSheet.create({
    boxHora: {
        backgroundColor: "#9FDAC7",
        borderRadius: 10,
        width: 120,
        padding: 5, 
        alignItems :"center",
        marginBottom: 5
        
      },
})
export default HoraCita