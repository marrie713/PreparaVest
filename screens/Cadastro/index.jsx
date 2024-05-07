import { Text, TouchableOpacity, View, TextInput,Image } from 'react-native';
import { style } from './style';

export default function Cadastro() {

  return (
    <View style={style.container}> 
        <Image source={require('../../assets/LogoPreparaVest.png')} style={style.Logo}  />
      <View style={style.header}>
        <View style={style.titulo}>
          <Text style={style.titulo}>Cadastro</Text>
        </View>

        <TextInput style={style.TextInput} placeholder="Nome"/>
        <TextInput style={style.TextInput} placeholder="Email"/>
        <TextInput style={style.TextInput} placeholder="Senha"/>
        <TextInput style={style.TextInput} placeholder="Confirmar senha"/>

        <TouchableOpacity style={style.botao}>
          <Text style={{color: '#fff', fontSize: 22}}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}