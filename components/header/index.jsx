import { Text,View,TextInput,Image, Linking } from "react-native";
import { style } from "./style";
import { Icon } from "react-native-elements";
import { Link } from "react-router-native"

  

export default function Cabecalho(){
    return(
            <View style={style.cabecalho}>   
                <Image style={style.ImagemLogo}
                source={require('../../assets/LogoPreparaVest.png')} />
            <View style={{flexDirection: 'row', gap: 4}}>
                <TextInput style={style.pesquisa}
                />
                <Icon style={{height: 20, width: 20}}
                    name='search'
                    type='material'
                    color='#000'
                />
            </View>
            <View style={style.subtitulo}>
                <Text style={{fontSize: 22}}>Home</Text>
                <Text style={{fontSize: 22}}>Enem</Text>
                <Text style={{fontSize: 22}}>Sobre nós</Text>
            </View>
            <Icon
                name='person'
                type='material'
                color='#000'
            />
            </View>  
    )
}
