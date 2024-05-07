import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./style";


export default function Login() {

    return (
      <View style={styles.container}> 
        <Image style={styles.Logo}
        source={require('../../assets/LogoPreparaVest.png')} />
        <View style={styles.header}>
          <Text style={styles.texto}>Login</Text>
  
          <TextInput style={styles.TextInput} placeholder="Nome"/>
          <TextInput style={styles.TextInput} placeholder="Email"/>
          <TextInput style={styles.TextInput} placeholder="Senha"/>
  
          <TouchableOpacity style={styles.botao}>
            <Text style={{color: '#fff', fontSize: 22}}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }