import { View, TextInput, TouchableOpacity, Text, Image, Pressable } from "react-native";
import { styles } from "./style";
import { color } from "react-native-elements/dist/helpers";


export default function Login() {

    return (
      <View style={styles.container}> 
        <Image style={styles.Logo}
        source={require('../../assets/LogoPreparaVest.png')} />
        <View style={styles.header}>
          <Text style={styles.texto}>Login</Text>
  
          <TextInput style={styles.TextInput} placeholder="Email"/>
          <TextInput style={styles.TextInput} placeholder="Senha"/>


          <Pressable style={styles.cadastrar}>
            <Text style={{ fontSize: 22, color: '#45455F'}}>Cadastre-se</Text>
          </Pressable>

          <Pressable style={styles.botao}>
            <Text style={{color: '#fff', fontSize: 22}}>Entrar</Text>
          </Pressable>
        </View>
      </View>
    );
  }