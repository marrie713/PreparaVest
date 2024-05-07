import { StyleSheet } from "react-native";

export const enemstyle = StyleSheet.create({

    root:{
        flex:1,
        height:'100%',
        width:'100%'

    },
    espacobt:{
        flexDirection:'colum',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent:'space-around'
 
    },
    butao:{
        borderRadius:5,
        backgroundColor:'#38B6FF',
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        width:'100%',
        height:30
       
    },

    modal:{
        backgroundColor:'#38B6FF',
         justifyContent: 'center', 
         alignItems: 'center' ,
         justifyContent:'space-around'
    },

    butaomodal:{

        borderRadius:5,
        backgroundColor:'#38B6FF',
       
        margin:10,
        width:'50%',
        height:30,
        justifyContent:'center',
        alignItems:'center',
    },

    espacopv:{
       flexWrap:'wrap',
        flexDirection:'row',
        margin:50,
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent:'space-around',
    },
    espacopv1:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent:'space-around',
        width:1000,
        height:500,
        backgroundColor:'#38B6FF',
        borderRadius:5


    },

    card:{
        height:'20%',
        width:'30%',
        margin:5,
        backgroundColor:'#fff',
        padding:3,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'space-around'
    },

 
})