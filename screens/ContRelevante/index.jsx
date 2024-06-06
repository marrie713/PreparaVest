import  { useEffect } from 'react';
import { View, Text, Image, ScrollView, Pressable} from 'react-native';
import { estilo } from './style';
import * as Font from 'expo-font';
import Cabecalho from '../../components/header';
import { useState } from 'react';
import { Botoes } from '../../components/Botoes';

// Importe a fonte
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';
import FooterComponent from '../../components/footer';


export default function Conteudorel() {
  // Registre a fonte
  const [fontsLoaded, setFontsLoaded] = useState(false);

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
    <ScrollView>
    <View> 
        <Cabecalho/>
       
      <View style={{flexDirection: 'collumn', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Botoes />
          <View style={estilo.conteudo}>
            <Text style={estilo.textStyle}>Conteúdo Relevante</Text>
            <View style={estilo.espacopv1}>
              <View style={estilo.espacotaxtos}>
                  <View style={estilo.categoria} >
                  <Text style={estilo.titulos}> Linguagens, Códigos e suas Tecnologias</Text>
                  <Text  style={estilo.textos}>- Interpretação de textos literários e não literários.</Text>
                  <Text  style={estilo.textos}>- Gramática normativa e linguística.</Text>
                  <Text  style={estilo.textos}>- Produção textual.</Text>
                  <Text  style={estilo.textos}>- Literatura brasileira e portuguesa.</Text>
                  <Text  style={estilo.textos}>- Língua estrangeira (inglês ou espanhol).</Text>
                
                  </View>
                  <View style={estilo.categoria} >
                  <Text  style={estilo.titulos}>Matemática e suas Tecnologias:</Text>
                  <Text  style={estilo.textos}>- Álgebra.</Text >
                  <Text  style={estilo.textos}>- Geometria.</Text>
                  <Text  style={estilo.textos}>- Trigonometria.</Text>
                  <Text  style={estilo.textos}>- Estatística e probabilidade.</Text>
                  <Text  style={estilo.textos}>- Análise de gráficos e tabelas.</Text>

                  </View>
              </View>
            </View>
            <View style={estilo.espacotaxtos}>
                  <View  style={estilo.categoria}>
                    <Text style={estilo.titulos}>Ciências Humanas e suas Tecnologias:</Text>
                    <Text  style={estilo.textos}>- História do Brasil e do mundo.</Text>
                    <Text  style={estilo.textos}>- Geografia política, econômica e cultural.</Text>
                    <Text  style={estilo.textos}>- Sociologia</Text>
                    <Text  style={estilo.textos}>- Filosofia.</Text>
                    <Text  style={estilo.textos}>- Atualidades e contextos sociais.</Text>
                
                  </View >
                  <View style={estilo.categoria} >
                    <Text  style={estilo.titulos}>Ciências da Natureza e suas Tecnologias:</Text>
                    <Text  style={estilo.textos}>- Biologia celular e molecular.</Text >
                    <Text  style={estilo.textos}>- Ecologia.</Text>
                    <Text  style={estilo.textos}>- Física (mecânica, termodinâmica, óptica, etc.).</Text>
                    <Text  style={estilo.textos}>- Química (química geral, orgânica e inorgânica).</Text>
                    <Text  style={estilo.textos}>- Aplicação dos conceitos científicos em situações do cotidiano.</Text>
                  </View>
            </View>    
          </View>
        </View>

          <View style={estilo.viewtitulo}>
          <Text style={estilo.tituloProf}>Professores Indicados</Text>
          </View>
           
          <View style={estilo.container}>

            <View style={estilo.bloco}>
            <Text style={estilo.Materias}>Matemática</Text>
            <View style={estilo.professores}> 
              <Image
              style={estilo.Perfil}
              source={require('../../assets/FerrettoProfile.jpg')}
              />
              <View >
                <Text style={estilo.textosMaterias}>Professor Ferretto</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@professorferretto', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}> Somos a melhor comunidade de professores da internet, com o melhor preço do Brasil e com a missão de fazer você conquistar a sua aprovação no ENEM e Vestibulares de todo o Brasil!</Text>
                </Pressable>
              </View>
            </View>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/CurioProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Dicasdemat Sandro Curió</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@sandrocuriodicasdemat/featured', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>O canal DicasdeMat Sandro Curió tem como objetivo ajudar estudantes, em todos os níveis da matemática, de forma clara e objetiva. Através de uma didática descontraída, você absorve todo conteúdo. Vamos juntos, RUMO AO TOPO!</Text>
                </Pressable>
              </View>
            </View>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/GiscomGizProfile.jpg')}
              />
              <View >
                <Text style={estilo.textosMaterias}>Gis com Giz Mathematics</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@Giscomgiz/featured', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Hi!! I am Gis Mathematics teacher and Master in Mathematics Education. I created the channel with the aim of showing that it is easy to learn mathematics and, therefore, I try to give clear and objective explanations. I hope my channel helps improve the mathematical knowledge of my students, alumni, future students and everyone who wants to learn mathematics. Good studies.</Text>
                </Pressable>
              </View>
            </View>
      
             <Text style={estilo.Materias}>Física</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/CoelhoProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Professor Coelho</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@profcoelho', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>O canal de Física do Professor Coelho sintetiza o que milhares de estudantes desejam: é a OPORTUNIDADE única para adquirir um elevado CONHECIMENTO em física, desde o nível básico até o avançado. Venha estudar conosco e torne-se um apaixonado por essa disciplina!</Text>
                </Pressable>
              </View>
            </View>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/BoaroProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Professor Boaro</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@professorboaro/featured', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Fala Galera! Neste Canal postarei vídeos com dicas para os vestibulares, resolução das provas mais recentes, além das aulas divididas em pequenos módulos para facilitar seu aprendizado. Postarei também aqui vídeos sobre assuntos importantes que envolve ciências e que está rolando no mundo, além de experimentos para aproximar seu estudo do seu cotidiano. Aproveite!</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Química</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/MichelProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Café com química - Prof Michel</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@profmichel', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>O canal café com química surgiu para oferecer uma solução criativa no estudo de química!!!!!! Através de aulas curtas, experiências e exercícios temos o enorme prazer de contribuir para a democratização do ensino no Brasil.</Text>
                </Pressable>
              </View>
            </View>
      
            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/CabralProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Professor Gabriel Cabral</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@ProfessorGabrielCabral', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Canal voltado para o ensino da Química de maneira rápida e divertida.</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Biologia</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/SamuelProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Biologia com Samuel Cunha</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@professorsamuelcunha', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Bem-vindos ao Biologia com Samuel Cunha, um canal dedicado à educação! O prof. Samuel é biólogo licenciado, mestre em parasitologia, formado há mais de dez anos pela Universidade Federal de Pelotas. Durante sua graduação, começou a lecionar de forma beneficente no cursinho presencial Pré Vestibular Desafio, mantido pela UFPel, e desde então se apaixonou pela profissão! No final de 2015, iniciou este canal e colocou em prática o sonho de expandir o seu trabalho e ajudar a melhorar a educação desse brasilzão afora! </Text>
                </Pressable>
              </View>
            </View>
            </View>

          <View style={estilo.bloco}>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/GoulartProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Prof. Guilherme Goulart - Biologia</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@ProfGuiGoulart', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Projeto voltado a estudantes com interesse em compreender a biologia como um todo, seja para passar no vestibular, seja para tirar uma boa nota em uma prova.</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Português</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/NoslenProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Professor Noslen</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@ProfessorNoslen', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Canal voltado para o ensino de toda a Língua Portuguesa, com o intuito de facilitar a aprendizagem de maneira rápida e divertida! Maior canal de educação do Brasil e maior plataforma de LP do Brasil!</Text>
                </Pressable>
              </View>
            </View>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/LeticiaProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Português com Letícia</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/c/Portugu%C3%AAscomLet%C3%ADcia', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>🚀 PORTUGUÊS COMPLETO | Sua aprovação está aqui! Curso completo, do básico ao avançado, com videoaulas exclusivas. Mais de 150 aulas aprofundadas e objetivas com foco em concursos públicos. Resumos em PDF, tabelinhas de revisão, mais de 1.000 questões comentadas de forma detalhada e plano de estudos. Módulos bônus de interpretação de textos, redação e organização dos estudos.</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Geografia</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/RicardoProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Professor Ricardo Marcílio</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/c/ProfessorRicardoMarc%C3%ADlio', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Canal dedicado a pessoas que buscam uma visão crítica dos principais acontecimentos do mundo. Voltado a pré-vestibulandos e curiosos em geral em assuntos relacionados à Geografia & Atualidades</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>História</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/ParabolicaProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Parabólica</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/c/Parab%C3%B3lica', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Olá, eu sou Pedro Rennó, sou Professor de História e Filosofia de cursinho. Neste canal, Parabólica, terei sempre o maior prazer em lhes ajudar a conquistar os seus objetivos. Espero que gostem e sejam muito bem vindos!</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Sociologia e Filosofia</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/FerrariProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Professor Ferrari</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@ProfessorFerrari', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Canal do Professor Ferrari - humanidades para Enem e vestibulares.</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Literatura</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/AlencarProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Literatura com Alencar</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@LiteraturacomAlencar', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Olá, meu nome é Alencar Schueroff. Sou doutor em Literatura pela Universidade Federal de Santa Catarina (UFSC) e professor de Ensino Médio e Pré-Vestibulares há mais de 20 anos.                                                                                                                                                                                   Com minhas videoaulas de Literatura, ajudo você em provas, mostrando e ensinando o que mais cai em Literatura no Enem, em vestibulares e concursos  em geral, através de assuntos como: conceitos básicos, Escolas Literárias e resumos de obras literárias. </Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Inglês</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/KennyProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>PROFESSOR KENNY</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@PROFESSORKENNYOFICIAL', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>O Professor Kenny é nativo do Canadá e reside no Brasil em definitivo com sua esposa brasileira desde os 23 anos. Aqui, ele acumulou vasta experiência como professor de inglês, desenvolvendo uma metodologia singular e revolucionária que garante o aprendizado definitivo da língua.</Text>
                </Pressable>
              </View>
            </View>
            </View>
          </View>

        
      </View>
      </View>
      <FooterComponent/>
    </ScrollView>
  );
}