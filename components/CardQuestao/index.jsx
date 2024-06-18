import { card } from "./style";
import { View, Text, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import { useEffect, useState } from 'react';
import { apiConfig } from '../../utils/api';

export function CardQuestoes({materia}){

    const [questoes, setQuestoes] = useState([]);

  useEffect(() =>{
    apiConfig.get(`/questao/${materia}`).then((res)=>{
        setQuestoes(res.data)
    })
  },[])
    
    return(
        <View style={card.root}>
        <View style={card.questoes}>
            <View style={{flexDirection: 'row', justifyContent: 'center', gap: 40}}>
                <Icon
                    name='arrow-back'
                    type='material'
                    color='#000'
                />
                    <Text style={card.titulo}>Questões</Text>
                <Icon
                    name='arrow-forward'
                    type='material'
                    color='#000'
                />
            </View>
                    <Text style={{width: 800}}>Um tipo de semente necessita de bastante água nos dois primeiros meses após o plantio. Um produtor pretende estabelecer o melhor momento para o plantio desse tipo de semente, nos meses de outubro a março. Após consultar a previsão do índice mensal de precipitação de chuva (ImPC) da região onde ocorrerá o plantio, para o período chuvoso de 2020-2021, ele obteve os seguintes dados:</Text>
                    <View style={card.container}>
                        <View style={card.alternativas}>
                            <Pressable style={card.botao}>
                                <Text style={card.textobotao}>A</Text>
                            </Pressable>
                            <Text>Janeiro</Text>
                        </View>

                        <View style={card.alternativas}>
                            <Pressable style={card.botao}>
                                <Text style={card.textobotao}>B</Text>
                            </Pressable>
                            <Text>Fevereiro</Text>
                        </View>

                        <View style={card.alternativas}>
                            <Pressable style={card.botao}>
                                <Text style={card.textobotao}>C</Text>
                            </Pressable>
                            <Text>Março</Text>
                        </View>

                        <View style={card.alternativas}>
                            <Pressable style={card.botao}>
                                <Text style={card.textobotao}>D</Text>
                            </Pressable>
                            <Text>Abril</Text>
                        </View>

                        <View style={card.alternativas}>
                            <Pressable style={card.botao}>
                                <Text style={card.textobotao}>E</Text>
                            </Pressable>
                            <Text>Maio</Text>
                        </View>
                    </View>
                </View>
            </View>
    )
}