import { View, TextInput, TouchableOpacity, Text, Image, Pressable, Alert, StyleSheet } from "react-native";
import { styles } from "./style";
import { color } from "react-native-elements/dist/helpers";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { Input } from "react-native-elements";

export default function Login() {

   const navigation = useNavigation();

      //State usado exclusivamente para controlar o icone e o efeito de secureTextEntry no campo senha
      const [passwordVisible, SetPasswordVisible] = useState(true)
  
      //States feitos para controlar oque o usuario esta digitando nos Inputs
      // Por questão visual apenas, foi colocado valores iniciais quaisquer nos states 
      const [email, setEmail] = useState('@')
      const [password, setPassword] = useState('_password_')
  
      //Campos feitos para controlar se os campos tem de erro
      const [isEmailError, setIsEmailError] = useState(false)
      const [isPasswordError, setIsPasswordError] = useState(false)
  
      useEffect(() => {
          if(!email.trim().includes('@') || email == null)
              setIsEmailError(true)
          else
              setIsEmailError(false)
          if(password.length != 10 || password == null)
              setIsPasswordError(true)
          else
              setIsPasswordError(false)
      }, [email, password]);
  
          //Função usada pra enviar o post para a rota da api responsavel pelo login
          async function login()
          {
              if(!isPasswordError && !isEmailError && email != '@' && password != '_password_')
              {
                  try
                  {
                      //Ja que a API é padrão para todo o sistema, isolei as configurações gerais
                      //e apenas importo elas aonde preciso e uso o método http que eu quero
      
                      let res = await apiConfig.post('/login',{
                          email: email,
                          senha: password
                          
                      });
                      console.log(res)
      
                      if(res.status == 204){
                          return Alert.alert('Ops...','Usuario ou senha incorretos!',
                              [
                                  { 
                                      text: 'Ok'
                                  }
                              ]
                          )
                      }
                      else
                      return
                  }
                  catch(error)
                  {
                      console.log(error)
                      throw new Error('Erro ao logar... :(');        
                  }
              }
          }

    return (
      <View style={styles.container}> 
        <Image style={styles.Logo}
        source={require('../../assets/LogoPreparaVest.png')} />
        <View style={styles.header}>
          <Text style={styles.texto}>Login</Text>
  
          <Input  
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            errorMessage={isEmailError ? 'Email invalido!' : ''}
            inputContainerStyle={
                !isEmailError?
                estilo.input_container
                :
                estilo.input_container_error
            }/>

          <Input   
            placeholder="Senha"
            onChangeText={text => setPassword(text)}
            secureTextEntry={passwordVisible}
            errorMessage={isPasswordError ? 'Senha invalida!' : ''}
            maxLength={10}
            inputContainerStyle={
                !isPasswordError?
                estilo.input_container
                :
                estilo.input_container_error
            }
          />

          <Pressable style={styles.cadastrar}>
            <Text style={{ fontSize: 22, color: '#45455F'}}  onPress={()=> navigation.navigate("Cadastro")}>Cadastre-se</Text>
          </Pressable>

          <Pressable style={styles.botao} onPress={()=> login()}>
            <Text style={{color: '#fff', fontSize: 22}}>Entrar</Text>
          </Pressable>
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