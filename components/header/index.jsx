import { Text,View,Image } from "react-native";
import { style } from "./style";
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

//fonte
import * as Font from 'expo-font';
import { useEffect } from 'react';
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';


export default function Cabecalho(){
    //chame esse cara em todos os componentes que desejar fazer troca de tela
    const navigation = useNavigation();

    useEffect(() => {
        async function loadFonts() {
          await Font.loadAsync({
            KollektifBold: KollektifBold,
            Kollektif: Kollektif,
          });
          setFontsLoaded(true);
        }
    
        loadFonts();
      }, []);
    

    return(
            <View style={style.cabecalho}>   
                <Image style={style.ImagemLogo}
                source={require('../../assets/LogoPreparaVest.png')} />
           
            <View style={style.subtitulo}>
                <Text style={{fontSize: 22, fontFamily: 'Kollektif'}} onPress={()=> navigation.navigate("Home")}>Home</Text>
                <Text style={{fontSize: 22, fontFamily: 'Kollektif'}} onPress={()=> navigation.navigate("Pagina Enem")}>Enem</Text>
                <Text style={{fontSize: 22, fontFamily: 'Kollektif'}} >Sobre nós</Text>
            </View>
            <Icon
                name='person'
                type='material'
                color='#000'
            />
            </View>  
    )
}
