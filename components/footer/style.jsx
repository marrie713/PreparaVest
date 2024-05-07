import { StyleSheet } from "react-native"

export const footerestilo = StyleSheet.create({

    root:{
        height: '100%',
        width: '100%',
        fontFamily: 'Kollektif',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        
    },

    footer: {
        backgroundColor: '#38b6ff',
        height: '40%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },

    titulo: {
        fontSize: 35,
        fontWeight: 'bold',
   
        
    },
    subtitulo:{
        fontSize: 25,
        fontWeight: 'bold'
    },

    textosuporte: {
        fontSize: 18,
        width: 450,
        textAlign: 'left',
        
    },
    Contato: {
        backgroundColor: '#d9d9d9',
        height: 50,
        width: 280,
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
        fontSize: 16
    },

    mensagem: {
        backgroundColor: '#d9d9d9',
        height: 100 ,
        width: 280,
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
        fontSize: 16,
        
    },

    esquerdo:{
        flexDirection: 'collumn',
        justifyContent: 'space-around',
        
        
    },

    direito: {
        backgroundColor: '#fff',
        width: 300,
        height: 300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    informacoes: {
        flexDirection: 'column',
        gap: 10,
    },
    texto_contato:{
        fontWeight: 'bold'
    },
    icon_redes:{
        width: 20,
        height: 20
    },

    botaoEnviar: {
        width: 100,
        height: 30,
        backgroundColor: '#4776df',
        textAlign: 'center',
        borderRadius: 10,
        color: '#fff',
        fontSize: 25,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10
        
    }


})