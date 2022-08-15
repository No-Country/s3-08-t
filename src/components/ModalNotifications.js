import {View, Text, StyleSheet, Modal, TouchableOpacity, Image} from 'react-native';
import {useState} from 'react';
import { COLORS } from '../../styles/colors';


export const ModalNotifications = ({title,msg})=>{
    const [visible, setVisible] = useState(true);
    return(
    <View>
        
        
        <Modal
        transparent={true}
        visible={visible}
        animationType='slide' >
            <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
            
                {/*<Text style={styles.modalTitle}>{title}</Text>*/}
                <Image style={styles.modalImage} source={require('../../assets/login/error.png')} />
                <Text style={styles.modalMsg}>{msg}</Text>
        <TouchableOpacity
             style={styles.modalCloseBtn}
             onPress={()=>setVisible(false)}>
            <Text style={styles.modalCloseText}>OK</Text>
        </TouchableOpacity>
            </View>
            </View>
        </Modal>

    </View>
)
}

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000000AA'
    },
    modalBox:{
        backgroundColor:COLORS.primary,
        borderColor:COLORS.secondary,
        borderWidth:1,
        borderRadius:10,
        width:'60%',
        height:'20%',
        justifyContent:'center',
        alignItems:'center'
    },
    modalCloseBtn:{
        borderRadius:25,
        backgroundColor:COLORS.secondary,
        width:100,
        height:35,
        alignItems:'center',
        justifyContent:'center',  
        
        
    },
    modalCloseText:{
        color:'white',
        fontWeight:'bold',
        
    },
    modalTitle:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        color:COLORS.secondary
        
    },
    modalMsg:{
        textAlign:'center',
        fontSize:14,
        paddingHorizontal:10,
        paddingVertical:10,
        color:COLORS.secondary
        
    },
    modalImage:{
        width:30,
        height:30
        
    }
})