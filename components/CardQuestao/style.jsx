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
        padding: 20,

        height: 1000,
        width: 850
    },

    titulo: {
        fontSize: 20,
        textAlign: 'center'
    },

    alternativas: {
        backgroundColor: '#38b6ff',
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    }
})