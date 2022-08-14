import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { CustomButton } from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../styles/colors";

export const InicioScreen = () => {
    const navigation = useNavigation();

  const handleClickLogin = () => {
    navigation.navigate("login");
  };
  const handleClickRegister = () => {
    navigation.navigate("register");
  };

  return (
    <View style={styles.inicioScreenContainer}>
      <View style={{alignItems:'center'}}>
      <Image
        style={styles.inicioScreenLogo}
        source={require("../../assets/landing/logo.png")}
      />
      </View>

      <View>
        <CustomButton title="Ingresar" onPress={handleClickLogin} backColor={{backgroundColor:'#40b590'}} colorText={{color: COLORS.black}} />
        <CustomButton title="Crear Una cuenta" onPress={handleClickRegister} backColor={{backgroundColor:'#40b590'}} colorText={{color: COLORS.black}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inicioScreenContainer: {
    flex:1,
    justifyContent:'space-between',
    marginTop: 10,
  },

  inicioScreenLogo: {},
});
