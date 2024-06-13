import { StyleSheet } from "react-native";


export const Prof = StyleSheet.create({
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
        width: 480
        

        
    },

    container: {
        gap: 100,
        marginBottom: 50,
        flexDirection: 'row',

    },

    Perfil: {
        borderRadius: 100
    },

    biografia: {
        width: 200,
        marginLeft: 50,
        fontFamily: 'Kollektif'

    },

    textosMaterias: {
        fontSize: 20,
        fontFamily: 'KollektifBold',
        marginTop: 30,
        marginLeft: 50,
        width: 200
    },

    bloco: {
        flexDirection: 'column',
        gap: 70,
    }
})