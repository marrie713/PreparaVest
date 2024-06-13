import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    header: {
      height:450,
      width:350,
      backgroundColor: "#FCFCFC",
      borderRadius: 20,
      justifyContent: "center",
      alignItems: 'center',
      fontFamily: 'Kollektif'
  
    },
    container: {
      flex: 1,
      backgroundColor:"#38B6FF",
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextInput: {
      backgroundColor: "#d9d9d9",
      height: 50,
      width: 280,
      margin: 14,
      borderRadius: 25,
      padding:20,
      color: '#797976',
      fontSize: 18
    },
    botao: {
      height: 50,
      width: 100,
      backgroundColor: '#4776DF',
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30

    },
    cadastrar:{
      textDecorationLine: "underline",
      color: '#A2A3BB'
    },

  texto: {
    color: "#000",
    fontSize: 40,   
    textAlign: 'center',
    marginBottom: 30
  },

  Logo: {
    width: 400,
    height: 100,
    marginBottom: 30
  },

  });