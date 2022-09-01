import { Text,  StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    // Size
    smallExtra: {
        fontSize: 14,
    },
     
    small: {
        fontSize: 16,
    },
    medium : {
        fontSize: 20,
    },
    large: {
        fontSize: 24,
    },
    // Color
    primary: {
        color: "#A9A9A9",
    },
    secondary: {
        color: "#343434",
    },
    // Weight
    bold : {
        fontWeight: "bold",
    },
    // Margin
    mt24: {
        marginTop: 24,
    },
    mt12: {
        marginTop: 12,
    },
    // Align
    left: {
        textAlign: "left",
    },
    
    poppinsBold: {
        fontFamily: "poppinsBold",
    },
    robotoRegular: {
        fontFamily: "robotoRegular",
    }, 
    textAlignCenter: {
        textAlign: "center",
    },
    mb24: {
        marginBottom: 24
    },
    whiteText:{ 
       color: "rgba(248, 255, 253, 1)",
    }, 
    ml6: {
        marginLeft: 6
    },
    flex1: {
        flex: 1
    }
    
  });

  export default function StyledText ({small,
     medium, 
     large,
      primary, 
      secondary, 
      bold, 
      mt24, 
      left, 
      children,
       poppinsBold, 
       robotoRegular,
       textAlignCenter,
       mt12,
       mb24,
       whiteText,
       smallExtra,
       ml6,flex1
    }) {
    
    const style = [
        small && styles.small,
        medium && styles.medium,
        large && styles.large,
        primary && styles.primary,
        secondary && styles.secondary,
        bold && styles.bold,
        mt24 && styles.mt24,
        left && styles.left,
        poppinsBold && styles.poppinsBold,
        robotoRegular&& styles.robotoRegular,
        textAlignCenter && styles.textAlignCenter,
       mt12 && styles.mt12,
       mb24 && styles.mb24,
       whiteText && styles.whiteText,
       smallExtra && styles.smallExtra,
       ml6 && styles.ml6,
       flex1 && styles.flex1
    ]
    
    return (
        <Text style={style}>
            {children}
        </Text>
    )
  }