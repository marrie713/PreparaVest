import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({

  
    textStyle: {
        color: 'black',
        fontFamily: 'KollektifBold',
        textAlign: 'center',
        fontSize:25,
        marginBottom:30,
        marginTop: 30
      },

    espacopv:{
        flexDirection:'column',
        margin:15,
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent:'space-around',
        
    },
    espacopv1:{
        alignItems: 'flex-start',
        justifyContent:'center',
        justifyContent:'space-around',
        width:1000,
        height:480,
        flexDirection:'row',
       
    },

    //style desta pagina//

    titulos:{
        fontFamily: 'KollektifBold',
        fontSize: 20,
        margin:5
    },

    textos:{

       fontFamily: 'Kollektif',
        fontSize: 20,
        marginLeft:30,
        marginTop:2
    },
    
    espacotaxtos:{
        width:'47%',
       
    },
    categoria:{
        margin:6
    },

    conteudo: {
        flexDirection: 'column',
        
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
        borderRadius: 25

        
    },

    container: {
        gap: 50,
        marginLeft: 50,
        marginBottom: 20, 
        

    },

    Perfil: {
        borderRadius: 100
    },

    biografia: {
        width: 550,
        marginLeft: 50,
        fontFamily: 'Kollektif'

    },

    textosMaterias: {
        fontSize: 20,
        fontFamily: 'KollektifBold',
        marginTop: 30,
        marginLeft: 50
    }
})