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
       flexWrap:'wrap',
        flexDirection:'row',
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
    }
})