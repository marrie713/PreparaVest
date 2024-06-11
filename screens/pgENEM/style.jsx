import { StyleSheet } from "react-native";

export const enemstyle = StyleSheet.create({

    root:{
        flex:1,
        height:'100%',
        width:'100%',

    },
    espacobt:{
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: '8%'
 
    },
    butao:{
        borderRadius:5,
        backgroundColor:'#38B6FF',
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        width:'120%',
        height:40
       
    },

    text:{
     
      fontSize:30,
      fontFamily: 'KollektifBold',
      marginBottom:60,
      
    },

    textinho:{
      fontSize:19,
      fontFamily: 'Kollektif',
      
    },

    //modal//
    centeredView: {
        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo semi-transparente escuro
    
      },
      modalView: {
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        height:'100%',
        width:'100%',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent:'center',
        alignItems:'center'

      },
      button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginTop:20,
        backgroundColor: '#2196F3',
        
      },
   
      buttonClose: {
        backgroundColor: '#38B6FF'

      },
      textStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize:25,
        marginBottom:30,
        fontFamily: 'KollektifBold',
        
      },

      textStyle1: {
        color: 'black',
        fontSize:20,
        textAlign: 'center',
        fontFamily: 'Kollektif',
      },
      modalText: {
        marginBottom: 15,
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'row',
       width:'50%',
       gap: 10
      
      },

    espacopv:{
        flexWrap:'wrap',
        flexDirection:'row',
        margin:15,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    espacopv1:{
      
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        width:1000,
        height:500,
        backgroundColor:'#38B6FF',
        borderRadius:15,
        flexWrap:'wrap',
        marginBottom: 10



    },

    card:{
        height:'20%',
        margin:12,
        backgroundColor:'#fff',
        padding:3,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        gap: 8
        
    },

 
})