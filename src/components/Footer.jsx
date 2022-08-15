import { View, Text,  StyleSheet, TouchableOpacity } from 'react-native';
import * as RootNavigation  from "../../RootNavigation"

const Footer = () => {
    return (
        <View style={styles.footer}>
            {/*Cambiar por Historial*/ }
            <TouchableOpacity 
            style= {styles.button}
            onPress={()=> RootNavigation.navigate("login")} >
                <Text>Historial</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.button}
            onPress={()=> RootNavigation.navigate("register")} >
                <Text>Marcar Cita</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.button}
            onPress={()=> RootNavigation.navigate("ConfirmaCita")} >
                <Text>Turnos de cita</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
footer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'

},
button: {
    padding: 20,
}

})

export default Footer