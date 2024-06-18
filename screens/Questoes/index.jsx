import { View, Text, ScrollView } from "react-native";
import { estiloquestoes } from "./style";
import { Botoes } from "../../components/Botoes";
import Cabecalho from "../../components/header";
import FooterComponent from "../../components/footer";
import BasicExample from "../dropdawn/index";
import { CardQuestoes } from "../../components/CardQuestao";
import { useState } from "react";

export function Questoes(){

    const[materia, setMateria] = useState('matemática')

    function mudarMateria(novaMateria){
        setMateria(novaMateria)
    }

    return(
        <ScrollView>
        <View style={estiloquestoes.root}>
            <Cabecalho/>

            <View style={{flexDirection: 'row'}}>
                <Botoes/>
                <View style={estiloquestoes.espacopv}>
                    <View style={estiloquestoes.filtroMaterias}>
                        <Text style={estiloquestoes.textmateria}>Selecione a matéria</Text>
                        <BasicExample funcao={mudarMateria}/>    
                    </View>  
                    <CardQuestoes materia={materia}/>
                </View>
            </View>
            <FooterComponent/>
            
        </View>
        </ScrollView>

    )
}
