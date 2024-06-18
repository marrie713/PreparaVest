import { StyleSheet } from "react-native";

export const card = StyleSheet.create({
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
        textAlign: 'center',
    },
})