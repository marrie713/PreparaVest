import { Text,View,TextInput,Image } from "react-native";
import { style } from "./style";
import { Icon } from "react-native-elements";
//import * as React from 'react';

//esse era o problema, a importaçao tem que ser essa
import { useNavigation } from '@react-navigation/native';
import HomeScreen from "../../screens/home";


export default function Cabecalho(){
    //chame esse cara em todos os componentes que desejar fazer troca de tela
    const navigation = useNavigation();

    return(
            <View style={style.cabecalho}>   
                <Image style={style.ImagemLogo}
                source={require('../../assets/LogoPreparaVest.png')} />
           
            <View style={style.subtitulo}>
                <Text style={{fontSize: 22}} onPress={()=> navigation.navigate("Home")}>Home</Text>
                <Text style={{fontSize: 22}} onPress={()=> navigation.navigate("Pagina Enem")}>Enem</Text>
                <Text style={{fontSize: 22}} >Sobre nós</Text>
            </View>
            <Icon
                name='person'
                type='material'
                color='#000'
            />
            </View>  
    )
}
