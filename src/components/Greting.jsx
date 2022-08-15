import { View, StyleSheet, Image} from 'react-native';
import StyledText from "../../styles/styleText";



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#F2F2F2",
     
    },
    image: {
        width: 70,
        height: 100,

    }

})

const Header = () => {
    // Saludos
    var myDate = new Date();
    var hours= myDate.getHours();
    var greet;
    if (hours < 12)
        greet =  "dias";
    else if (hours >= 12 && hours <= 17)
        greet = "tardes";
    else if (hours >= 17 && hours <= 24)
        greet = "noches";


    return (
        <View style = {{flexDirection: "row", justifyContent: 'space-between'}}>
                <View>
                    <Image style={styles.image} source= { require("../../assets/doctor.png") } />
                </View>
                <View >
                    <StyledText medium secondary>
                        Buenas {greet}! 
                    </StyledText>
                    <StyledText medium secondary bold>
                        Maria das Flores!
                    </StyledText>
                </View>
            </View>
        
    )
}

export default Header 