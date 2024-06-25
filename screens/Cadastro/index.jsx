import { Text, Pressable, View ,Image, StyleSheet } from 'react-native';
import { style } from './style';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {


  const navigation = useNavigation();


  return (

      <View style={style.container}> 
          <Image source={require('../../assets/LogoPreparaVest.png')} style={style.Logo}  />
        <View style={style.header}>
          <View style={style.titulo}>
            <Text style={style.titulo}>Cadastro</Text>
          </View>

        <View>
          <Input 
          placeholder="Nome"
          />
          <Input placeholder="Email"
        
          />

          <Input placeholder="Senha"/>

          <Input placeholder="Confirmar senha"
              />
           
      
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Pressable style={style.botao}  onPress={()=> storeUser()}>
            <Text style={{color: '#fff', fontSize: 22}}>Entrar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  
  input_container_error : {
      borderWidth: 0,
      backgroundColor: "#ECECEC",
      height: 50,
      width: 300,
      margin: 10,
      borderRadius: 10,
      padding:30,
      color: '#797976',
      fontSize: 18
  },
  input_container: {
    backgroundColor: "#ECECEC",
    height: 50,
    width: 300,
    margin: 10,
    borderRadius: 10,
    padding:30,
    color: '#797976',
    fontSize: 18
  }
})