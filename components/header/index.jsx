import { Text,View,TextInput,Image, Modal, Pressable} from "react-native";
import { style } from "./style";
import { Icon } from "react-native-elements";
import Avatar from "../../screens/avatar";
import { useNavigation } from '@react-navigation/native';

import { useState } from 'react';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';


export default function Cabecalho(){

    const navigation = useNavigation();

    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
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
                <Text style={{fontSize: 22, fontFamily: 'KollektifBold'}} onPress={()=> navigation.navigate("Home")}>Home</Text>
                <Text style={{fontSize: 22, fontFamily: 'KollektifBold'}} onPress={()=> navigation.navigate("Pagina Enem")}>Enem</Text>
                <Text style={{fontSize: 22, fontFamily: 'KollektifBold'}}>Sobre nós</Text>
            </View>
            <Pressable 
            //onPress={() => setModalVisible(true)}
            onPress={()=> navigation.navigate("Login")}
            >
                <Icon
                    name='person'
                    type='material'
                    color='#000'
                />
            </Pressable>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={style.perfilmodal}>
                <View style={style.modal}>
                  <Text style={style.titulomodal}>Perfil</Text>

                  <Image source={require('../../assets/avatares/perfil-de-usuario.png')} style={style.imagemavatar}/>
                  <Text style={style.textomodal}>Nome </Text>
                  <Text style={style.textomodal}>Email usuario</Text>
                  <Pressable onPress={() => setModalVisible1(true)} style={style.botal }>Alterar foto</Pressable>
                  <Modal
                          animationType="slide"
                          transparent={true}
                          visible={modalVisible1}
                          onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible1(!modalVisible1);
                          }}>
                          <View style={style.avatarmodal}>
                              <Avatar/>
                              <Pressable
                                onPress={() => setModalVisible1(!modalVisible1)}>
                                <Text  style={style.titulomodal1}>Voltar a pagina anterior</Text>
                              </Pressable>
                            
                          </View>
                        </Modal>
                  <Pressable style={style.botal }>Sair da conta</Pressable>
                  <Pressable
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text  style={style.titulomodal1}>Voltar a pagina anterior</Text>
                  </Pressable>
                  
                    <View style={style.icone}>
                    <Icon
                    name='logout'
                    type='material'
                    color='#000'
                     />
                  </View>
                </View>
              </View>
             
            </Modal>
          
          </View>
          
    )
}