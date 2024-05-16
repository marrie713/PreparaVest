import { View, TouchableOpacity, Text } from "react-native";
import Cabecalho from "../../components/header";
import { estiloquestoes } from "./style";
import { Botoes } from "../../components/Botoes";



export function Questoes(){

    return(
        <View style={estiloquestoes.container}>
            <Cabecalho/>
            <Botoes/>

            
        </View>
    )
}