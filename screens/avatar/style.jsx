import { StyleSheet } from "react-native";

export const avatar = StyleSheet.create({

    tela:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },
    espacoimgs:{
        justifyContent:'center',
        alignItems:'center',
        height:'75%',
        width:'60%',
        backgroundColor:'#38B6FF',
        flexDirection:'row',
        flexWrap:'wrap',
        borderRadius:5
    },

    imagem:{
        height:150,
        width:150,
        borderRadius:5,
        margin:10
      
    },
    texto:{
        margin:10,
        fontSize: 26,
        fontFamily: 'KollektifBold',
        
    }
})