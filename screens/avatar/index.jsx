import { View,Text,Image,Modal, } from "react-native";
import { useState } from "react";
import { avatar } from "./style";
import * as Font from 'expo-font';
import { useEffect } from 'react';
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';





export default function Avatar(){

    const [fontsLoaded, setFontsLoaded] = useState(false);

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
        <View style={avatar.tela}>
            <Text style={avatar.texto}>Escolha seu avatar</Text>

            <View  style={avatar.espacoimgs}> 
             <Image source={require('../../assets/avatares/1.png')}style={avatar.imagem}/>
             <Image source={require('../../assets/avatares/2.png')}style={avatar.imagem}/>
             <Image source={require('../../assets/avatares/3.png')}style={avatar.imagem}/>
             <Image source={require('../../assets/avatares/4.png')}style={avatar.imagem}/>
             <Image source={require('../../assets/avatares/5.png')}style={avatar.imagem}/>
             <Image source={require('../../assets/avatares/6.png')}style={avatar.imagem}/>
             <Image source={require('../../assets/avatares/7.png')}style={avatar.imagem}/>
             <Image source={require('../../assets/avatares/8.png')}style={avatar.imagem}/> 
             <Image source={require('../../assets/avatares/9.png')}style={avatar.imagem}/>
             <Image source={require('../../assets/avatares/10.png')}style={avatar.imagem}/>
             <Image source={require('../../assets/avatares/12.png')}style={avatar.imagem}/>
             <Image source={require('../../assets/avatares/13.png')}style={avatar.imagem}/>
             <Image source={require('../../assets/avatares/14.png')}style={avatar.imagem}/>
             <Image source={require('../../assets/avatares/15.png')}style={avatar.imagem}/>
             <Image source={require('../../assets/avatares/16.png')}style={avatar.imagem}/>
            </View>
            
        </View>
    )
}