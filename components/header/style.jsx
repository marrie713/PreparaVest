import { StyleSheet } from "react-native";

export  const style = StyleSheet.create({

    cabecalho:{
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#38B6FF'
    },

    ImagemLogo:{
        height: 130,
        width: 160
    },

    subtitulo: {
        fontSize: 20,
        flexDirection: 'row',
        gap: 25,
        alignItems: 'center',
        justifyContent: 'center'
       
    },
    pesquisa: {
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 350,
        height: 30,
        border:'solid'
    },
    perfilmodal:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor:'#000',
        padding: 20,
        
     
       
    },
    titulomodal:{
        fontSize: 25,
         fontFamily: 'KollektifBold',
         marginBottom:10

    },
    titulomodal1:{
        fontSize: 20,
         fontFamily: 'Kollektif',
         marginBottom:30

    },
    modal:{
       
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor:'#38B6FF',
        justifyContent:'space-around',
        height:'70%',
        width:'50%',
       borderRadius:5
    },
    avatarmodal:{
        height:'100%',
        width:'100%',
        backgroundColor:'#38B6FF',
        justifyContent: 'flex-star', 
        alignItems: 'center', 
    },
    
    imagemavatar:{
        borderRadius:7,
        height:'30%',
        width:'20%'
    },

    textomodal:{
        fontSize: 20,
        fontFamily: 'Kollektif'
    },

    botal:{
        backgroundColor:'#fff5f5f5',
        borderRadius:5,
        padding:5,
        fontFamily: 'Kollektif',
    },
    icone:{
        justifyContent:'center',
        alignItems:'flex-end',
        width:'90%'
    },

    

})