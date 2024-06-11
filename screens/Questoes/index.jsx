import { View, Text, ScrollView } from "react-native";
import { estiloquestoes } from "./style";
import { Botoes } from "../../components/Botoes";
import Cabecalho from "../../components/header";
import FooterComponent from "../../components/footer";
import BasicExample from "../dropdawn/index";
import { CardQuestoes } from "../../components/CardQuestao";

export function Questoes(){

    return(
        <ScrollView>
        <View style={estiloquestoes.root}>
            <Cabecalho/>

            <View style={{flexDirection: 'row'}}>
            <Botoes/>
            <View style={estiloquestoes.espacopv}>
                

             <CardQuestoes/>

                </View>

                <View style={estiloquestoes.filtroMaterias}>
                    <Text style={estiloquestoes.textmateria}>Selecione a matéria</Text>
                    <BasicExample/>
                    
                </View>
            </View>
            <FooterComponent/>
            
        </View>
        </ScrollView>

    )
}
