import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({

  
    textStyle: {
        color: 'black',
        fontFamily: 'KollektifBold',
        fontSize:25,
        marginBottom:30,
        marginTop: 30,
      },

    espacopv1:{
        
        width:1000,
        height:180,
        flexDirection:'row',
       
    },

    titulos:{
        fontFamily: 'KollektifBold',
        fontSize: 20,
        margin:5
    },


    textos:{
        width: 450,
        fontFamily: 'Kollektif',
        fontSize: 20,
        marginLeft:30,

    },
    
    espacotaxtos:{
        //width:'47%',
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    categoria:{
        //margin:6,
    },

    conteudo: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100
        
    }
})