import { Text, Pressable, View ,Image, StyleSheet } from 'react-native';
import { style } from './style';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {


  const navigation = useNavigation();

 function CadastroUsuario(){
    const [passwordVisible, SetPasswordVisible] = useState(true)

    const [nome, setNome] = useState('some_name')
    const [email, setEmail] = useState('some@email.com')
    const [password, setPassword] = useState('1234567890')
    const [confirmPassword, setConfirmPassword] = useState('1234567890')

    const [errorNome, setErrorNome] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
    
    useEffect(() => {
        if(!email.trim().includes('@') || email == "" || email == null)
            setErrorEmail('Insira um email valido!')
        else
            setErrorEmail('')
        
        if(password.length < 10 || password.length > 10 || password == "" || password == null)
            setErrorPassword('Senha invalida!')
        else
            setErrorPassword('')

        if(nome == "" || nome == null)
            setErrorNome('Nome invalido')
        else
            setErrorNome('')

        if(confirmPassword != password)
        {
            setErrorConfirmPassword('As senhas não coincidem')
        }
        else
            setErrorConfirmPassword('')
        
    }, [nome, email, password, confirmPassword]);

        async function storeUser(){
        if(
            email != '@' &&
            password != '_password_'
        )
        {
            try{
                let res = await apiConfig.post('/user/novo',{
                    email: email,
                    senha: password,
                })

                if(res.status == 200)
                {
                    return Alert.alert('Ok','Usuario cadastrado!',
                    [
                        {
                            text: 'Ok',
                            onPress: ()=> navigation.navigate('Home')
                        }
                    ])
                }
                else
                {
                    return Alert.alert('Ops...','Email ja cadastrado!',
                    [
                        {
                            text: 'Ok',
                        }
                    ])  
                }
            }
            catch(error){

            }
        }
    }

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
          onChangeText={text => setNome(text)}
                    inputContainerStyle={
                        errorNome == '' ?
                        estilo.input_container
                        :
                        estilo.input_container_error
                    }
                    errorMessage={errorNome}
                    leftIcon={
                        <Icon 
                            name='person'
                            type='material'
                        />
                    }/>

          <Input placeholder="Email"
          errorMessage={errorEmail}
          onChangeText={text => setEmail(text)}
          inputContainerStyle={
              errorEmail == '' ?
              estilo.input_container
              :
              estilo.input_container_error
          }
          leftIcon={
              <Icon 
                  name='mail'
                  type='material'
              />
          }/>

          <Input placeholder="Senha"
          maxLength={10}
          onChangeText={text => setPassword(text)}
          inputContainerStyle={
              errorPassword == '' ?
              estilo.input_container
              :
              estilo.input_container_error
          }
          secureTextEntry={passwordVisible}
          errorMessage={errorPassword}
          leftIcon={
              <Icon 
                  name='password'
                  type='material'
              />
          }
          rightIcon={
              passwordVisible ? 
              <Icon 
                  name="visibility-off"
                  type="material"
                  size={22}
                  onPress={()=> SetPasswordVisible(!passwordVisible)}
              />
              :
              <Icon 
                  name="visibility"
                  type="material"
                  size={22}
                  onPress={()=> SetPasswordVisible(!passwordVisible)}
                  />              
                }/>

          <Input placeholder="Confirmar senha"
          errorMessage={errorConfirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          inputContainerStyle={
              errorConfirmPassword == '' ?
              estilo.input_container
              :
              estilo.input_container_error
          }
          maxLength={10}
          secureTextEntry={passwordVisible}
          leftIcon={
              <Icon 
                  name='password'
                  type='material'
              />
          }
          rightIcon={
              passwordVisible ? 
              <Icon 
                  name="visibility-off"
                  type="material"
                  size={22}
                  onPress={()=> SetPasswordVisible(!passwordVisible)}
              />
              :
              <Icon 
                  name="visibility"
                  type="material"
                  size={22}
                  onPress={()=> SetPasswordVisible(!passwordVisible)}
              />
          }  
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
}}

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