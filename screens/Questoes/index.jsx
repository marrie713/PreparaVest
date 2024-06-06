import { View, Text, Pressable, ScrollView } from "react-native";
import { estiloquestoes } from "./style";
import { Botoes } from "../../components/Botoes";
import Cabecalho from "../../components/header";
import FooterComponent from "../../components/footer";
import BasicExample from "../dropdawn/index";

export function Questoes(){

    return(
        <ScrollView>
        <View style={estiloquestoes.root}>
            <Cabecalho/>

            <View style={{flexDirection: 'row'}}>
            <Botoes/>
            <View style={estiloquestoes.espacopv}>
                

                <View style={estiloquestoes.questoes}>
                    <Pressable>{'<'}</Pressable>
                    <Text style={estiloquestoes.titulo}>Questões</Text>
                    <Pressable>{'>'}</Pressable>
                    <View>
                        <Text style={{width: 800}}>Um tipo de semente necessita de bastante água nos dois primeiros meses após o plantio. Um produtor pretende estabelecer o melhor momento para o plantio desse tipo de semente, nos meses de outubro a março. Após consultar a previsão do índice mensal de precipitação de chuva (ImPC) da região onde ocorrerá o plantio, para o período chuvoso de 2020-2021, ele obteve os seguintes dados:</Text>
                    </View>

                    <View style={estiloquestoes.container}>
                        <View style={estiloquestoes.alternativas}>
                            <Pressable style={estiloquestoes.botao}>
                                <Text style={estiloquestoes.textobotao}>A</Text>
                            </Pressable>
                            <Text>Janeiro</Text>
                        </View>

                        <View style={estiloquestoes.alternativas}>
                            <Pressable style={estiloquestoes.botao}>
                                <Text style={estiloquestoes.textobotao}>B</Text>
                            </Pressable>
                            <Text>Fevereiro</Text>
                        </View>

                        <View style={estiloquestoes.alternativas}>
                            <Pressable style={estiloquestoes.botao}>
                                <Text style={estiloquestoes.textobotao}>C</Text>
                            </Pressable>
                            <Text>Março</Text>
                        </View>

                        <View style={estiloquestoes.alternativas}>
                            <Pressable style={estiloquestoes.botao}>
                                <Text style={estiloquestoes.textobotao}>D</Text>
                            </Pressable>
                            <Text>Abril</Text>
                        </View>

                        <View style={estiloquestoes.alternativas}>
                            <Pressable style={estiloquestoes.botao}>
                                <Text style={estiloquestoes.textobotao}>E</Text>
                            </Pressable>
                            <Text>Maio</Text>
                        </View>
                    </View>
                </View>
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
