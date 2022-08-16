import { View, StyleSheet, Image, Text} from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import Logo from '../../assets/Images/Logo.png';



const Header = (props) => {
    return(
        <View style={styles.header}>
            <Image source={Logo} style={{margin : "auto"}} />
        </View>
    )
}

const styles = StyleSheet.create ({
    header: {
        width: "100%",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
       backgroundColor: "#DFF3EC"
    },
})


export default Header;