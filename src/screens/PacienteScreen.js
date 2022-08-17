import { View, Text, Image, StyleSheet, ScrollView, TextInput } from 'react-native'
import React from 'react'
import Footer from '../components/Footer'


export const PacienteScreen = () => {

  return (
    <>
    <ScrollView >
      <View style={styles.container}>
        <Image style={styles.logoDoctor} source={require('../../assets/doctor.png')} />
        <View>
          <Text style={styles.text1}>Buenas Noches,</Text>
          <Text style={styles.text2}>Maria das Flores!</Text>
        </View>
      </View>
      
      <View style={styles.container2}>
        <Text style={styles.text3}>Mi Historial</Text>
        
        {/* TextInput buscar - start */}
        {/* https://reactnativecode.com/place-image-icon-inside-textinput-left-side/ */}
        <View style={styles.container3}>
          <View style={styles.sectionStyle}>
            <TextInput
              style={{flex:1, fontSize: 20, fontFamily: 'robotoLight', color: '#fff'}}
              placeholder="buscar"
              placeholderTextColor='#fff'
              selectionColor={'#40B590'}
            />
            <Image source={require('../../assets/buscar.png')} style={styles.imageStyle} />
          </View>
        </View>
        {/* TextInput buscar - end */}
        
        {/* Label + input */}
        <Text style={styles.text4}>Examenes</Text>
        <View style={styles.container4}>
          <Image source={require('../../assets/img1.png')} />
          <Image source={require('../../assets/img2.png')} />
        </View>
        
        {/* Label + input */}
        <Text style={styles.text4}>Doctores</Text>
        <TextInput
          style={styles.input1}
          placeholder="buscar"
          placeholderTextColor='#fff'
          selectionColor={'#40B590'}
        />
        
        {/* Label + input */}
        <Text style={styles.text4}>Mis citas</Text>
        <TextInput
          style={styles.input1}
          placeholder="buscar"
          placeholderTextColor='#fff'
          selectionColor={'#40B590'}
        />
        
        {/* Plus icon */}
        <View style={styles.plusImage}>
          <Image source={require('../../assets/plus.png')} />
        </View>
      </View>
      
      
    </ScrollView>
    <Footer />
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginLeft: 21,
    marginRight: 12
  },
  logoDoctor: {
    width: 77,
    height: 102,
    marginTop: 0,
    resizeMode: 'contain'
  },
  text1: {
    color: '#A9A9A9',
    fontSize: 14,
    fontFamily: 'robotoRegular',
    textAlign: 'right'
  },
  text2: {
    fontSize: 18,
    fontFamily: 'robotoMedium',
    textAlign: 'right'
  },
  
  container2: {
    paddingHorizontal:21,
  },
  
  //Mi historial
  text3: {
    fontSize: 20,
    fontFamily: 'robotoMedium',
    marginVertical: 12,
  },
  
  // ************************
  // TextInput buscar - start
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //margin: 10,
  },
  
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(64, 181, 144, 0.5)',
    //borderWidth: .5,
    //borderColor: '#000',
    height: 80,
    borderRadius: 18 ,
    //margin: 10,
    
    paddingLeft: 27,
  },
  // buscar icon
  imageStyle: {
    padding: 10,
    margin: 13,
    height: 56,
    width: 56,
    resizeMode : 'stretch',
    alignItems: 'center'
  },
  // TextInput buscar - end
  // **********************
  
  // plus icon
  plusImage: {
    alignItems: 'center',
    marginTop: 25
  },
  // examenes, doctores, mis citas
  text4: {
    fontSize: 16,
    fontFamily: 'robotoBold',
    marginVertical: 12,
  },
  input1: {
    fontSize: 16,
    fontFamily: 'robotoLight',
    color: '#fff',
    backgroundColor: 'rgba(64, 181, 144, 0.5)',
    height: 50,
    borderRadius: 13,
    paddingLeft: 27
  },
  // examenes images
  container4: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})