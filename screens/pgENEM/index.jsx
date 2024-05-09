
import { View, Text, TouchableOpacity, Modal, Button, ScrollView } from 'react-native'; // Importe o Button de 'react-native'
import { enemstyle } from './style';
import Cabecalho from '../../components/header';
import { useState } from 'react';


export default function PaginaEnem() {

    const [modalVisible, setModalVisible] = useState(false) // Certifique-se de definir o estado e a função de estado

    return(
        <View style={enemstyle.root}>
            <Cabecalho/>

            <ScrollView>
            <View style={enemstyle.espacopv}>
                
            <View style={enemstyle.espacobt}>
            <Text>Enem</Text>
                <TouchableOpacity style={enemstyle.butao} ><Text>Informações gerais</Text></TouchableOpacity>
                <TouchableOpacity style={enemstyle.butao}><Text>Conteúdo relevante</Text></TouchableOpacity>
                <TouchableOpacity style={enemstyle.butao}><Text>Questões</Text></TouchableOpacity>
            </View>
            <View>

                    <Text>Vestibulares anteriores</Text>

                    <View style={enemstyle.espacopv1} >

                        <View style={enemstyle.card}> 
                            <Text>Prova 2012</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={() => setModalVisible(true)}   />
                        </View>
                        <Modal visible={modalVisible} animationType="slide"  >
                            <View>
                                <View>
                                    <Text>Detalhes sobre a prova</Text>
                                    <Text >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia1_caderno1_azul.pdf', "Vestibular")} style={enemstyle.butaomodal} > Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia1_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Text >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia2_caderno7_azul.pdf', "Vestibular") }  style={enemstyle.butaomodal}> Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia2_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Button title="Fechar Modal" onPress={() => setModalVisible(false)}  style={enemstyle.butaomodal} />
                                </View>
                            </View>
                        </Modal>
                        <View style={enemstyle.card}> 
                            <Text>Prova 2012</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={() => setModalVisible(true)}  style={enemstyle.butao} />
                        </View>
                        <Modal visible={modalVisible} animationType="slide">
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ backgroundColor: 'white', padding: 20 }}>
                                    <Text>Detalhes sobre a prova</Text>
                                    <Text >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia1_caderno1_azul.pdf', "Vestibular")} style={enemstyle.butaomodal} > Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia1_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Text >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia2_caderno7_azul.pdf', "Vestibular") }  style={enemstyle.butaomodal}> Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia2_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Button title="Fechar Modal" onPress={() => setModalVisible(false)}  style={enemstyle.butaomodal} />
                                </View>
                            </View>
                        </Modal>
                        <View style={enemstyle.card}> 
                            <Text>Prova 2012</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={() => setModalVisible(true)}  style={enemstyle.butao} />
                        </View>
                        <Modal visible={modalVisible} animationType="slide">
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ backgroundColor: 'white', padding: 20 }}>
                                    <Text>Detalhes sobre a prova</Text>
                                    <Text >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia1_caderno1_azul.pdf', "Vestibular")} style={enemstyle.butaomodal} > Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia1_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Text >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia2_caderno7_azul.pdf', "Vestibular") }  style={enemstyle.butaomodal}> Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia2_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Button title="Fechar Modal" onPress={() => setModalVisible(false)}  style={enemstyle.butaomodal} />
                                </View>
                            </View>
                        </Modal>
                        <View style={enemstyle.card}> 
                            <Text>Prova 2012</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={() => setModalVisible(true)}  style={enemstyle.butao} />
                        </View>
                        <Modal visible={modalVisible} animationType="slide">
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ backgroundColor: 'white', padding: 20 }}>
                                    <Text>Detalhes sobre a prova</Text>
                                    <Text >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia1_caderno1_azul.pdf', "Vestibular")} style={enemstyle.butaomodal} > Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia1_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Text >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia2_caderno7_azul.pdf', "Vestibular") }  style={enemstyle.butaomodal}> Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia2_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Button title="Fechar Modal" onPress={() => setModalVisible(false)}  style={enemstyle.butaomodal} />
                                </View>
                            </View>
                        </Modal>
                        <View style={enemstyle.card}> 
                            <Text>Prova 2012</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={() => setModalVisible(true)}  style={enemstyle.butaomodal} />
                        </View>
                        <Modal visible={modalVisible} animationType="slide">
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ backgroundColor: 'white', padding: 20 }}>
                                    <Text>Detalhes sobre a prova</Text>
                                    <Text >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia1_caderno1_azul.pdf', "Vestibular")} style={enemstyle.butaomodal} > Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia1_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Text >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia2_caderno7_azul.pdf', "Vestibular") }  style={enemstyle.butaomodal}> Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia2_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Button title="Fechar Modal" onPress={() => setModalVisible(false)}  style={enemstyle.butaomodal} />
                                </View>
                            </View>
                        </Modal>
                        <View style={enemstyle.card}> 
                            <Text>Prova 2012</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={() => setModalVisible(true)}  style={enemstyle.butaomodal} />
                        </View>
                        <Modal visible={modalVisible} animationType="slide">
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ backgroundColor: 'white', padding: 20 }}>
                                    <Text>Detalhes sobre a prova</Text>
                                    <Text >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia1_caderno1_azul.pdf', "Vestibular")} style={enemstyle.butaomodal} > Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia1_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Text >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia2_caderno7_azul.pdf', "Vestibular") }  style={enemstyle.butaomodal}> Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia2_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Button title="Fechar Modal" onPress={() => setModalVisible(false)}  style={enemstyle.butaomodal} />
                                </View>
                            </View>
                        </Modal>
                        <View style={enemstyle.card}> 
                            <Text>Prova 2012</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={() => setModalVisible(true)}  style={enemstyle.butaomodal} />
                        </View>
                        <Modal visible={modalVisible} animationType="slide">
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ backgroundColor: 'white', padding: 20 }}>
                                    <Text>Detalhes sobre a prova</Text>
                                    <Text >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia1_caderno1_azul.pdf', "Vestibular")} style={enemstyle.butaomodal} > Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia1_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Text >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia2_caderno7_azul.pdf', "Vestibular") }  style={enemstyle.butaomodal}> Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia2_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Button title="Fechar Modal" onPress={() => setModalVisible(false)}  style={enemstyle.butaomodal} />
                                </View>
                            </View>
                        </Modal>
                        <View style={enemstyle.card}> 
                            <Text>Prova 2012</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={() => setModalVisible(true)}  style={enemstyle.butaomodal} />
                        </View>
                        <Modal visible={modalVisible} animationType="slide">
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ backgroundColor: 'white', padding: 20 }}>
                                    <Text>Detalhes sobre a prova</Text>
                                    <Text >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia1_caderno1_azul.pdf', "Vestibular")} style={enemstyle.butaomodal} > Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia1_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Text >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia2_caderno7_azul.pdf', "Vestibular") }  style={enemstyle.butaomodal}> Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia2_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Button title="Fechar Modal" onPress={() => setModalVisible(false)}  style={enemstyle.butaomodal} />
                                </View>
                            </View>
                        </Modal>
                        <View style={enemstyle.card}> 
                            <Text>Prova 2012</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={() => setModalVisible(true)}  style={enemstyle.butaomodal} />
                        </View>
                        <Modal visible={modalVisible} animationType="slide">
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ backgroundColor: 'white', padding: 20 }}>
                                    <Text>Detalhes sobre a prova</Text>
                                    <Text >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia1_caderno1_azul.pdf', "Vestibular")} style={enemstyle.butaomodal} > Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia1_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Text >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia2_caderno7_azul.pdf', "Vestibular") }  style={enemstyle.butaomodal}> Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia2_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Button title="Fechar Modal" onPress={() => setModalVisible(false)}  style={enemstyle.butaomodal} />
                                </View>
                            </View>
                        </Modal>
                        <View style={enemstyle.card}> 
                            <Text>Prova 2014</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={() => setModalVisible(true)}  style={enemstyle.butaomodal} />
                        </View>
                        <Modal visible={modalVisible} animationType="slide">
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ backgroundColor: 'white', padding: 20 }}>
                                    <Text>Detalhes sobre a prova</Text>
                                    <Text >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia1_caderno1_azul.pdf', "Vestibular")} style={enemstyle.butaomodal} > Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia1_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Text >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia2_caderno7_azul.pdf', "Vestibular") }  style={enemstyle.butaomodal}> Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia2_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Button title="Fechar Modal" onPress={() => setModalVisible(false)}  style={enemstyle.butaomodal} />
                                </View>
                            </View>
                        </Modal>
                        <View style={enemstyle.card}> 
                            <Text>Prova 2013</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={() => setModalVisible(true)}  style={enemstyle.butaomodal} />
                        </View>
                        <Modal visible={modalVisible} animationType="slide">
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ backgroundColor: 'white', padding: 20 }}>
                                    <Text>Detalhes sobre a prova</Text>
                                    <Text >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2013/dia1_caderno1_azul.pdf', "Vestibular")} style={enemstyle.butaomodal} > Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2013/dia1_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Text >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2013/dia2_caderno7_azul.pdf', "Vestibular") }  style={enemstyle.butaomodal}> Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2013/dia2_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Button title="Fechar Modal" onPress={() => setModalVisible(false)}  style={enemstyle.butaomodal} />
                                </View>
                            </View>
                        </Modal>
                        <View style={enemstyle.card}> 
                            <Text>Prova 2012</Text>
                            <Text>Clique no botão abaixo para acessar a prova</Text>
                            <Button title="Prova" onPress={() => setModalVisible(true)}  style={enemstyle.butaomodal} />
                        </View>
                        <Modal visible={modalVisible} animationType="slide">
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ backgroundColor: 'white', padding: 20 }}>
                                    <Text>Detalhes sobre a prova</Text>
                                    <Text >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia1_caderno1_azul.pdf', "Vestibular")} style={enemstyle.butaomodal} > Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia1_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Text >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia2_caderno7_azul.pdf', "Vestibular") }  style={enemstyle.butaomodal}> Prova</TouchableOpacity>
                                    <TouchableOpacity onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia2_azul.pdf', "Gabarito")} style={enemstyle.butaomodal} >Gabarito </TouchableOpacity>

                                    <Button title="Fechar Modal" onPress={() => setModalVisible(false)}  style={enemstyle.butaomodal} />
                                </View>
                            </View>
                        </Modal>
                    
                    </View>
    
                

            </View>
            </View>
            </ScrollView>
        </View>
       

    )
}
