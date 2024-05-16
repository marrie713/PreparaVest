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
      },

    espacopv1:{
        fontFamily: 'KollektifBold',
        textAlign:'left',
        width:1000,
        height:520,
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

    linkEnem: {
        fontFamily: 'KollektifBold',
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#FFB74B'
    }
 
})