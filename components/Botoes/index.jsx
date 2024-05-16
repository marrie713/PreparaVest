import { View, Text, Pressable } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { estilobotoes } from "./style";
import Conteudorel from "../../screens/ContRelevante";
import { Questoes } from "../../screens/Questoes";


export function Botoes(){

    const navigation = useNavigation();

    return(
        <View style={estilobotoes.espacopv}>
        <View style={estilobotoes.espacobt}>
          <Text style={estilobotoes.text}>Enem</Text>
          <Pressable style={estilobotoes.butao} onPress={()=> navigation.navigate("PaginaEnem")}>
            <Text style={estilobotoes.textinho} >Provas</Text>
          </Pressable>
          <Pressable style={estilobotoes.butao} onPress={()=> navigation.navigate("Informacoes")}>
            <Text style={estilobotoes.textinho} >Informações gerais</Text>
          </Pressable>
          <Pressable style={estilobotoes.butao} onPress={()=> navigation.navigate("Conteudorel")}>
            <Text style={estilobotoes.textinho} >Conteúdo relevante</Text>
          </Pressable>
          <Pressable style={estilobotoes.butao} onPress={()=> navigation.navigate("Questoes")}>
            <Text style={estilobotoes.textinho} >Questões</Text>
          </Pressable>
        </View>
        </View>
    )
}