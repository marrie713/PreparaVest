import { View, Text, Pressable, Image } from "react-native";
import { Prof } from "./style";
import Cabecalho from "../../components/header";
import { ScrollView } from "react-native-gesture-handler";
import FooterComponent from "../../components/footer";
import { Botoes } from "../../components/Botoes";



export function Professores(){
    return(
        <ScrollView>
        <View style={Prof.root}>
            <Cabecalho/>

        <View style={{flexDirection: 'row'}}>
          <Botoes/>

        <View style={{flexDirection: 'collumn'}}>
          <View style={Prof.viewtitulo}>
          <Text style={Prof.tituloProf}>Professores Indicados</Text>
          </View>
           
          <View style={Prof.container}>

            <View style={Prof.bloco}>
            <Text style={Prof.Materias}>Matemática</Text>
            <View style={Prof.professores}> 
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/FerrettoProfile.jpg')}
              />
              <View >
                <Text style={Prof.textosMaterias}>Professor Ferretto</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@professorferretto', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}> Somos a melhor comunidade de professores da internet, com o melhor preço do Brasil e com a missão de fazer você conquistar a sua aprovação no ENEM e Vestibulares de todo o Brasil!</Text>
                </Pressable>
              </View>
            </View>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/CurioProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Dicasdemat Sandro Curió</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@sandrocuriodicasdemat/featured', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>O canal DicasdeMat Sandro Curió tem como objetivo ajudar estudantes, em todos os níveis da matemática, de forma clara e objetiva. Através de uma didática descontraída, você absorve todo conteúdo. Vamos juntos, RUMO AO TOPO!</Text>
                </Pressable>
              </View>
            </View>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/GiscomGizProfile.jpg')}
              />
              <View >
                <Text style={Prof.textosMaterias}>Gis com Giz Mathematics</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@Giscomgiz/featured', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Hi!! I am Gis Mathematics teacher and Master in Mathematics Education. I created the channel with the aim of showing that it is easy to learn mathematics and, therefore, I try to give clear and objective explanations. I hope my channel helps improve the mathematical knowledge of my students, alumni, future students and everyone who wants to learn mathematics. Good studies.</Text>
                </Pressable>
              </View>
            </View>
      
             <Text style={Prof.Materias}>Física</Text>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/CoelhoProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Professor Coelho</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@profcoelho', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>O canal de Física do Professor Coelho sintetiza o que milhares de estudantes desejam: é a OPORTUNIDADE única para adquirir um elevado CONHECIMENTO em física, desde o nível básico até o avançado. Venha estudar conosco e torne-se um apaixonado por essa disciplina!</Text>
                </Pressable>
              </View>
            </View>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/BoaroProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Professor Boaro</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@professorboaro/featured', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Fala Galera! Neste Canal postarei vídeos com dicas para os vestibulares, resolução das provas mais recentes, além das aulas divididas em pequenos módulos para facilitar seu aprendizado. Postarei também aqui vídeos sobre assuntos importantes que envolve ciências e que está rolando no mundo, além de experimentos para aproximar seu estudo do seu cotidiano. Aproveite!</Text>
                </Pressable>
              </View>
            </View>

            <Text style={Prof.Materias}>Química</Text>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/MichelProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Café com química - Prof Michel</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@profmichel', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>O canal café com química surgiu para oferecer uma solução criativa no estudo de química!!!!!! Através de aulas curtas, experiências e exercícios temos o enorme prazer de contribuir para a democratização do ensino no Brasil.</Text>
                </Pressable>
              </View>
            </View>
      
            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/CabralProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Professor Gabriel Cabral</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@ProfessorGabrielCabral', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Canal voltado para o ensino da Química de maneira rápida e divertida.</Text>
                </Pressable>
              </View>
            </View>

            <Text style={Prof.Materias}>Biologia</Text>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/SamuelProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Biologia com Samuel Cunha</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@professorsamuelcunha', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Bem-vindos ao Biologia com Samuel Cunha, um canal dedicado à educação! O prof. Samuel é biólogo licenciado, mestre em parasitologia, formado há mais de dez anos pela Universidade Federal de Pelotas. Durante sua graduação, começou a lecionar de forma beneficente no cursinho presencial Pré Vestibular Desafio, mantido pela UFPel, e desde então se apaixonou pela profissão! No final de 2015, iniciou este canal e colocou em prática o sonho de expandir o seu trabalho e ajudar a melhorar a educação desse brasilzão afora! </Text>
                </Pressable>
              </View>
            </View>
            </View>

          <View style={Prof.bloco}>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/GoulartProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Prof. Guilherme Goulart - Biologia</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@ProfGuiGoulart', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Projeto voltado a estudantes com interesse em compreender a biologia como um todo, seja para passar no vestibular, seja para tirar uma boa nota em uma prova.</Text>
                </Pressable>
              </View>
            </View>

            <Text style={Prof.Materias}>Português</Text>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/NoslenProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Professor Noslen</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@ProfessorNoslen', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Canal voltado para o ensino de toda a Língua Portuguesa, com o intuito de facilitar a aprendizagem de maneira rápida e divertida! Maior canal de educação do Brasil e maior plataforma de LP do Brasil!</Text>
                </Pressable>
              </View>
            </View>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/LeticiaProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Português com Letícia</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/c/Portugu%C3%AAscomLet%C3%ADcia', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>🚀 PORTUGUÊS COMPLETO | Sua aprovação está aqui! Curso completo, do básico ao avançado, com videoaulas exclusivas. Mais de 150 aulas aprofundadas e objetivas com foco em concursos públicos. Resumos em PDF, tabelinhas de revisão, mais de 1.000 questões comentadas de forma detalhada e plano de estudos. Módulos bônus de interpretação de textos, redação e organização dos estudos.</Text>
                </Pressable>
              </View>
            </View>

            <Text style={Prof.Materias}>Geografia</Text>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/RicardoProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Professor Ricardo Marcílio</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/c/ProfessorRicardoMarc%C3%ADlio', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Canal dedicado a pessoas que buscam uma visão crítica dos principais acontecimentos do mundo. Voltado a pré-vestibulandos e curiosos em geral em assuntos relacionados à Geografia & Atualidades</Text>
                </Pressable>
              </View>
            </View>

            <Text style={Prof.Materias}>História</Text>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/ParabolicaProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Parabólica</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/c/Parab%C3%B3lica', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Olá, eu sou Pedro Rennó, sou Professor de História e Filosofia de cursinho. Neste canal, Parabólica, terei sempre o maior prazer em lhes ajudar a conquistar os seus objetivos. Espero que gostem e sejam muito bem vindos!</Text>
                </Pressable>
              </View>
            </View>

            <Text style={Prof.Materias}>Sociologia e Filosofia</Text>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/FerrariProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Professor Ferrari</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@ProfessorFerrari', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Canal do Professor Ferrari - humanidades para Enem e vestibulares.</Text>
                </Pressable>
              </View>
            </View>

            <Text style={Prof.Materias}>Literatura</Text>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/AlencarProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Literatura com Alencar</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@LiteraturacomAlencar', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Olá, meu nome é Alencar Schueroff. Sou doutor em Literatura pela Universidade Federal de Santa Catarina (UFSC) e professor de Ensino Médio e Pré-Vestibulares há mais de 20 anos.                                                                                                                                                                                   Com minhas videoaulas de Literatura, ajudo você em provas, mostrando e ensinando o que mais cai em Literatura no Enem, em vestibulares e concursos  em geral, através de assuntos como: conceitos básicos, Escolas Literárias e resumos de obras literárias. </Text>
                </Pressable>
              </View>
            </View>

            <Text style={Prof.Materias}>Inglês</Text>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/KennyProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>PROFESSOR KENNY</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@PROFESSORKENNYOFICIAL', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>O Professor Kenny é nativo do Canadá e reside no Brasil em definitivo com sua esposa brasileira desde os 23 anos. Aqui, ele acumulou vasta experiência como professor de inglês, desenvolvendo uma metodologia singular e revolucionária que garante o aprendizado definitivo da língua.</Text>
                </Pressable>
              </View>
            </View>
            </View>
          </View>
          </View>
          </View>
        </View>

        <FooterComponent/>
        </ScrollView>
    )
}