import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({

    root:{
        flexDirection: 'row',
        justifyContent: 'center',
    }, 

    textStyle: {
        color: 'black',
        fontFamily: 'KollektifBold',
        textAlign: 'center',
        fontSize:25,
        marginBottom:30,
        marginTop: 30
      },

    espacopv1:{
        fontFamily: 'KollektifBold',
        textAlign:'left',
        width:1000,
        height:480,
    },

    //style desta pagina//

    titulos:{
        fontFamily: 'KollektifBold',
        fontSize: 20,
        margin:7
    },

    textos:{

       fontFamily: 'Kollektif',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5
    },
 
})