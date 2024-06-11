import { StyleSheet } from "react-native";


export const Prof = StyleSheet.create({
    root: {
        width: '100%'
    }, 

    tituloProf: {
        fontFamily: 'kollektifBold',
        fontSize: 25,
        margin: 80
    },

    viewtitulo: {
        justifyContent: 'center',
        alignItems: 'center',
        
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