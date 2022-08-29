import React from 'react';
import { ScrollView, StyleSheet, View,  FlatList, Text } from 'react-native'; 
import StyledText from "../../styles/styleText";
import Greting from '../components/Greting';
import Footer from '../components/Footer';

const examenesSangre =[
    {
        //valores naturales son 13,5-17,5 g/dL en hombres y 12-15,5 g/dL en mujeres.
        nombre: "hemoglobina",
        valor: "14.75 g/dl",
        
    },
    // Leucocitos: 4.000-11.000 mm3
    {
        nombre: "leucocitos", 
        valor: "12000.7mm3", 

    },
    //Glucosa: 70 a 100 mg/dl en ayunas o <140 mg/dl tras la comida
    {
        nombre: "glucosa",
        valor: "99.70mg/dl"
    }, 
    //Triglicéridos: Menos 150 mg/dl
    {
        nombre: "triglicéridos", 
        valor: "143.5mg/dl",
    }
]
const Item = ({ nombre , valor}) => (
    <View style= {styles.box} >
      <StyledText medium secondary poppinsBold>{nombre}</StyledText>
      <StyledText robotoRegular medium primary>{valor}</StyledText>
    </View>
  );


const ExamenSangre = (props) => {
    const renderItem = ({ item }) => (
        <>
        <Item nombre={item.nombre} />
        <Item valor= {item.valor} />
        </>
      );
    return (



    <>
    <ScrollView>
    <View style={styles.container}>
        <Greting name= "Ezequiel"/>
        <View>
            <StyledText medium  bold mt24 mb24>
                    Examen de Sangre
            </StyledText>
        </View>
        <View>
        
        <FlatList
        data={examenesSangre}
        renderItem={renderItem}
        keyExtractor={item => item.nombre}
      />
        </View>
        <View>

        </View>
    </View>
    </ScrollView>
    <Footer/>
    </>
   )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#DFF3EC",
      
      
     
    },
    box: {
        flexDirection: "row",
        
    }

})


export default ExamenSangre