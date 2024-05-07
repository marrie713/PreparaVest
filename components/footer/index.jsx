import { View, Text, TextInput, TouchableOpacity, Image, Linking } from "react-native";
import { footerestilo } from "./style";



export default function Footer(){
    return(
            <View style={footerestilo.footer}>
                <View style={footerestilo.esquerdo}>
                    <View>
                        <Text style={footerestilo.titulo}>Sobre nós</Text>
                        <Text style={footerestilo.textosuporte}>
                            O PreparaVest oferece suporte educacional a estudantes enfrentando desafios devido à qualidade insatisfatória do ensino público. Nossa equipe de alunos comprometidos proporciona recursos abrangentes, como questões desafiadoras, simulados e videoaulas. Priorizamos a personalização do aprendizado para que os alunos desenvolvam suas habilidades no próprio ritmo. Nosso objetivo é capacitar todos os alunos a alcançarem o sucesso nos vestibulares. Junte-se a nós nesta jornada educacional!
                        </Text>
                    </View>
                    <View style={{gap: 10}}>
                        <Text style={footerestilo.subtitulo}>Contatos</Text>
                        <View style={{flexDirection: 'row', gap: 30}}>
                            <View style={footerestilo.informacoes}>
                                <Text style={footerestilo.texto_contato}>Phone </Text>
                                <Text style={footerestilo.texto_contato}>Email </Text>
                                <Text style={footerestilo.texto_contato}>Social </Text>
                                
                            </View>  
                            <View style={{gap: 10}}>
                                <Text>(123) 4567-8901</Text>
                                <Text>Email.com</Text>
                                <View style={{flexDirection: 'row', gap: 15}}>
                                    <Image style={footerestilo.icon_redes}
                                    source={require('../../assets/facebook.png')} />

                                    <Image style={footerestilo.icon_redes}
                                    source={require('../../assets/twitter.png')} />

                                    <Image style={footerestilo.icon_redes}
                                    source={require('../../assets/instagram.png')} />
                                </View>
                            </View>
                        </View>  
                    </View>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <View style={footerestilo.direito}>
                        <View>
                            <TextInput style={footerestilo.Contato} placeholder="Nome" />
                            <TextInput style={footerestilo.Contato} placeholder="Email" />
                            <TextInput style={footerestilo.mensagem} placeholder="Mensagem" />
                        </View>
                        <View style={footerestilo.botaoEnviar}>
                            <TouchableOpacity>
                                <Text style={{fontSize: 22, color: '#fff'}}>Enviar</Text>
                            </TouchableOpacity>
                        </View> 
                    </View>
                </View>
            </View>
    );
}