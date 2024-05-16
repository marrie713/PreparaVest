import { StyleSheet } from "react-native";

export const estilobotoes = StyleSheet.create({
    espacobt:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        width: 400
 
    },

    text:{
        fontFamily: 'KollektifBold',
        fontSize:30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
      },

      espacopv:{
         flexWrap:'wrap',
         flexDirection:'row',
         margin: 15,
         alignItems: 'center',
         justifyContent: 'flex-start',
         
     },

     
    butao:{
        borderRadius:5,
        backgroundColor:'#38B6FF',
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        width: 230,
        height:40
       
    },

    textinho:{
        fontSize:19,
        fontFamily: 'KollektifBold',
      },
})