import React from 'react';
import { View, Text,Pressable } from 'react-native';
import { enemstyle } from '../../screens/pgENEM/style';

export const ModalContent1 = () => {
  return (
    <View>
      
      {<View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova 2012</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia1_caderno1_azul.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia1_azul.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2012/dia2_caderno7_azul.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2012/dia2_azul.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                       
                    </View>
                      
                 
                    }
    </View>
  );
};

export const ModalContent2 = () => {
  return (
    <View>
      
      {<View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova de 2013</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open('https://download.inep.gov.br/educacao_basica/enem/provas/2013/dia1_caderno1_azul.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2013/dia1_azul.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2013/dia2_caderno7_azul.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/gabaritos/2013/dia2_azul.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                       
                    </View>}
    </View>
  );
};

export const ModalContent3 = () => {
  return (
    <View>
     
      {<View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova de 2014</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/provas/2014/2014_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/gabaritos/2014/CADERNO_1_AZUL_SABADO.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2014/2014_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/gabaritos/2014/CADERNO_7_AZUL_DOMINGO.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                       
                    </View>}
    </View>
    
  );
};
export const ModalContent4 = () => {
  return (
    <View>
     
      {<View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova de 2015</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2015/2015_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/gabaritos/2015/CADERNO_1_AZUL_SABADO.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/provas/2015/2015_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2015/CADERNO_7_AZUL_DOMINGO.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                       
                    </View>}
    </View>
    
  );
};
export const ModalContent5 = () => {
  return (
    <View>
     
      {<View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova de 2016</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2016/2016_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/gabaritos/2016/GAB_ENEM_2016_DIA_1_01_AZUL.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/provas/2016/2016_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2016/GAB_ENEM_2016_DIA_2_07_AZUL.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                       
                    </View>}
    </View>
    
  );
};
export const ModalContent6 = () => {
  return (
    <View>
     
      {<View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova de 2017</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2017/2017_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2017/cad_1_gabarito_azul_5112017.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2017/2017_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/educacao_basica/enem/gabaritos/2017/cad_7_gabarito_azul_12112017.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                       
                    </View>}
    </View>
    
  );
};
export const ModalContent7 = () => {
  return (
    <View>
     
      {<View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova de 2018</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open('https://download.inep.gov.br/educacao_basica/enem/provas/2018/2018_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2018/GAB_ENEM_2018_DIA_1_AZUL.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2018/2018_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2018/GAB_ENEM_2018_DIA_2_AZUL.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                       
                    </View>}
    </View>
    
  );
};
export const ModalContent8 = () => {
  return (
    <View>
     
      {<View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova de 2019</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2019/2019_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2019/gabarito_1_dia_caderno_1_azul_aplicacao_regular.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/provas/2019/2019_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/educacao_basica/enem/gabaritos/2019/gabarito_2_dia_caderno_7_azul_aplicacao_regular.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                       
                    </View>}
    </View>
    
  );
};
export const ModalContent9 = () => {
  return (
    <View>
     
      {<View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova de 2020</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2020_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/enem/provas_e_gabaritos/2020_GB_impresso_D1_CD1.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open('  https://download.inep.gov.br/enem/provas_e_gabaritos/2020_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('https://download.inep.gov.br/enem/provas_e_gabaritos/2020_GB_impresso_D2_CD7.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                       
                    </View>}
    </View>
    
  );
};
export const ModalContent10 = () => {
  return (
    <View>
     
      {<View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova de 2021</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/enem/provas_e_gabaritos/2021_GB_impresso_D1_CD1.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/enem/provas_e_gabaritos/2021_GB_impresso_D2_CD7.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                       
                    </View>}
    </View>
    
  );
};
export const ModalContent11 = () => {
  return (
    <View>
     
      {<View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova de 2022</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2022_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('https://download.inep.gov.br/enem/provas_e_gabaritos/2022_GB_impresso_D1_CD1.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2022_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/enem/provas_e_gabaritos/2022_GB_impresso_D2_CD7.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                       
                    </View>}
    </View>
    
  );
};
export const ModalContent12 = () => {
  return (
    <View>
     
      {<View style={enemstyle.modalView}>
                        <Text style={enemstyle.textStyle}>Detalhes sobre a prova de 2023</Text>
                        <Text style={enemstyle.textStyle1} >1º Dia – Caderno 1 – Azul – Aplicação Regular</Text>
                        <View style={enemstyle.modalText} >
                             <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D1_CD1.pdf', "Vestibular")} style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/enem/provas_e_gabaritos/2023_GB_impresso_D1_CD1.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                       </View>
                      
                        <Text style={enemstyle.textStyle1} >2º Dia – Caderno 7 – Azul – Aplicação Regular</Text>
                         <View style={enemstyle.modalText} >
                              <Pressable onPress={() => window.open(' https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D2_CD7.pdf', "Vestibular") }  style={[enemstyle.button, enemstyle.textStyle1]}> Prova</Pressable>
                             <Pressable onPress={() => window.open('  https://download.inep.gov.br/enem/provas_e_gabaritos/2023_GB_impresso_D2_CD7.pdf', "Gabarito")} style={[enemstyle.button, enemstyle.textStyle1]}>Gabarito </Pressable>
                         </View>
                      
                       
                    </View>}
    </View>
    
  );
};