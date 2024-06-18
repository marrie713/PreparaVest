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

            <View style={Prof.espacomat}>

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
                  <Text style={Prof.biografia}>O canal DicasdeMat Sandro Curió tem como objetivo ajudar estudantes, em todos os níveis da matemática. Através de uma didática descontraída. Vamos juntos, RUMO AO TOPO!</Text>
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
                  <Text style={Prof.biografia}>Oi!! Sou professor de Matemática e Mestre em Educação Matemática. Criei o canal com o objetivo de mostrar que é fácil aprender matemática e, por isso, procuro dar explicações claras e objetivas. Bons estudos.</Text>
                </Pressable>
              </View>
            </View>
            </View>
            <Text style={Prof.Materias}>Física</Text>
            <View style={Prof.espacomat}>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/PedroProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}> Ciência Todo Dia</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@CienciaTodoDia', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Um canal totalmente voltado para assuntos que podem ser abordados no cotidiano, mantendo seu cérebro sempre ativo!</Text>
                </Pressable>
              </View>
            </View>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/CoelhoProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Professor Coelho</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@profcoelho', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>O canal de Física do Professor Coelho sintetiza o que milhares de estudantes desejam: é a OPORTUNIDADE única para adquirir um elevado CONHECIMENTO em física, desde o nível básico até o avançado. Venha estudar conosco!</Text>
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
                  <Text style={Prof.biografia}>Fala Galera! Neste Canal postarei vídeos com dicas para os vestibulares, resolução das provas mais recentes, além das aulas divididas em pequenos módulos para facilitar seu aprendizado. Aproveite!</Text>
                </Pressable>
              </View>
            </View>
            </View>
            

          

            <Text style={Prof.Materias}>Química</Text>
           <View style={Prof.espacomat}>
             <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/MichelProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Café com química - Prof Michel</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@profmichel', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>O canal café com química surgiu para oferecer uma solução criativa no estudo de química!!! Através de aulas curtas, experiências e exercícios temos o enorme prazer de contribuir para a democratização do ensino no Brasil.</Text>
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

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/MarcelaoProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}> Marcelão da Química</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/c/Marcel%C3%A3odaQu%C3%ADmica', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>O professor Marcelo Bria, mais conhecido como "Marcelão da Química", é Licenciado em Química (Univ. Uberaba-MG).  Esse canal apresenta aulas, resoluções de provas, documentários e vlogs. Tudo no universo da Química.</Text>
                </Pressable>
              </View>
            </View>
           </View>
           

            <Text style={Prof.Materias}>Biologia</Text>
          <View style={Prof.espacomat}>

          <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/LandimProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Bio com Landim</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@BiocomLandim', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Vídeos semanais sobre biologia com o prof Landim</Text>
                </Pressable>
              </View>
            </View>


             <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/SamuelProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Biologia com Samuel Cunha</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@professorsamuelcunha', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Bem-vindos ao Biologia com Samuel Cunha, um canal dedicado à educação! Iniciou este canal e colocou em prática o sonho de ajudar a melhorar a educação desse brasilzão afora! </Text>
                </Pressable>
              </View>
            </View>

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
          </View>
           

            <Text style={Prof.Materias}>Português</Text>
            <View style={Prof.espacomat}>
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
              source={require('../../assets/Professores/AlencarProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Literatura com Alencar</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@LiteraturacomAlencar', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Olá, meu nome é Alencar Schueroff. Com minhas videoaulas de Literatura, ajudo você em provas, mostrando e ensinando o que mais cai em Literatura no Enem, em vestibulares e concursos.</Text>
                </Pressable>
              </View>
            </View>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/FernandaProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>FPTV | Fernanda Pessoa TV</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@FernandaPessoaTV', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>O Fernanda Pessoa TV, ou FPTV, é o canal oficial do Fernanda Pessoa Grupo Educacional. Fernanda Pessoa é a professora do maior curso presencial de português e redação para ENEM e vestibulares do país. </Text>
                </Pressable>
              </View>
            </View>

            </View>
            
            <Text style={Prof.Materias}>Geografia</Text>
          <View style={Prof.espacomat}>
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

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/ThaisProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}> Professora Thais Formagio</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@profthaisformagio', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Se te disseram que Geografia é chata, difícil, que não é para você, é mentira. Aqui, eu ensino Geografia para transformar tudo. Transforma sonhos em realidade, cria novos futuros, e dá a chance de talentos adormecidos viverem aquilo que nasceram para fazer.</Text>
                </Pressable>
              </View>
            </View>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/JeanProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}>Prof. JeanGrafia | GabaritaGeo | </Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@gabaritageo', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>O Prof. JeanGrafia é formado em Geografia pela UNESP em São Paulo, tem ampla experiência em Geografia e Geopolítica e é a maior autoridade em Vestibulares de São Paulo da Internet.</Text>
                </Pressable>
              </View>
            </View>
          </View>
           

            <Text style={Prof.Materias}>História, Sociologia e Filosofia</Text>
          <View style={Prof.espacomat}>
              <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/ParabolicaProfile.jpg')}
              />
              <View  style={Prof.textop}>
                <Text style={Prof.textosMaterias}>Parabólica</Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/c/Parab%C3%B3lica', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Olá, eu sou Pedro Rennó, sou Professor de História e Filosofia de cursinho. Neste canal, Parabólica, terei sempre o maior prazer em lhes ajudar a conquistar os seus objetivos. Espero que gostem e sejam muito bem vindos!</Text>
                </Pressable>
              </View>
            </View>

            <View style={Prof.professores}>
              <Image
              style={Prof.Perfil}
              source={require('../../assets/Professores/DeboraProfile.jpg')}
              />
              <View>
                <Text style={Prof.textosMaterias}> Débora Aladim </Text>
                <Pressable onPress={() => window.open('https://www.youtube.com/@deboraaladim', 'Vestibular')}>
                  <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                  <Text style={Prof.biografia}>Débora Aladim é mineira, formada em História pela UFMG e desde 2013 faz vídeo-aulas que ajudaram milhões de pessoas a estudar e a passar no vestibular. Aqui você vai encontrar vídeo-aulas de História, um método único para fazer redações modelo ENEM e dicas de estudo! </Text>
                </Pressable>
              </View>
            </View>

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