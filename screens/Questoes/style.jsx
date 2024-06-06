import { StyleSheet } from "react-native";


export const estiloquestoes = StyleSheet.create({
    
    root: {
        
    },

    questoes: {
        gap: 30,
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        padding: 20
            },

    titulo: {
        fontSize: 20,
        textAlign: 'center'
    },

    alternativas: {
        flexDirection: 'row',
        gap: 20,
    },
    
    botao: {
        height: 40,
        width: 40,
        backgroundColor: '#38B6FF',
        borderRadius: 10,
        borderColor: '#2191FB',
        borderWidth: 2.5,
    },

    textobotao: {
        fontSize: 25,
        textAlign: 'center'
    },

    container: {
        gap: 10
    },

    espacopv:{
        margin: 15,
        marginTop: 40,
        marginBottom: 40
    },

    filtroMaterias: {
        marginTop: 50,
        marginLeft: 40
    },

    textmateria: {
        fontSize: 20,
        fontFamily: 'kollektif-bold',
        
    }
})