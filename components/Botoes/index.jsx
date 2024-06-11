import { View, Text, Pressable } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { estilobotoes } from "./style";


export function Botoes(){

    const navigation = useNavigation();

    return(
        <View style={estilobotoes.espacopv}>
        <View style={estilobotoes.espacobt}>
          <Text style={estilobotoes.text}>Enem</Text>
          <Pressable style={estilobotoes.butao} onPress={()=> navigation.navigate("Pagina Enem")}>
            <Text style={estilobotoes.textinho} >Provas</Text>
          </Pressable>
          <Pressable style={estilobotoes.butao} onPress={()=> navigation.navigate("Informações")}>
            <Text style={estilobotoes.textinho} >Informações gerais</Text>
          </Pressable>
          <Pressable style={estilobotoes.butao} onPress={()=> navigation.navigate("Conteúdo relevante")}>
            <Text style={estilobotoes.textinho} >Conteúdo relevante</Text>
          </Pressable>
          <Pressable style={estilobotoes.butao} onPress={()=> navigation.navigate("Questoes")}>
            <Text style={estilobotoes.textinho} >Questões</Text>
          </Pressable>
          <Pressable style={estilobotoes.butao} onPress={()=> navigation.navigate("Prepare-se")}>
            <Text style={estilobotoes.textinho} >Prepare-se</Text>
          </Pressable>
        </View>
        </View>
    )
}