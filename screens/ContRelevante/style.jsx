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

    tituloProf: {
        fontFamily: 'kollektifBold',
        fontSize: 25,
    },

    viewtitulo: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 100
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
        
    },

    Materias: {
        fontSize: 20,
        fontFamily: 'KollektifBold',
        textAlign: 'center'
    },

    professores: {
        flexDirection: 'row',
        shadowColor: '#171717',
        shadowOffset: {width: -4, height: 8},
        shadowOpacity: 0.3,
        shadowRadius: 15,
        padding: 20,
        borderRadius: 25,
        width: 600
        

        
    },

    container: {
        gap: 100,
        marginLeft: 50,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },

    Perfil: {
        borderRadius: 100
    },

    biografia: {
        width: 300,
        marginLeft: 50,
        fontFamily: 'Kollektif'

    },

    textosMaterias: {
        fontSize: 20,
        fontFamily: 'KollektifBold',
        marginTop: 30,
        marginLeft: 50
    },

    bloco: {
        flexDirection: 'column',
        gap: 70
    }
})