import  { useEffect } from 'react';
import { View, Text, Pressable, ScrollView} from 'react-native';
import { estilo } from './style';
import * as Font from 'expo-font';
import Cabecalho from '../../components/header';
import { useState } from 'react';
import { estilobotoes } from '../../components/Botoes/style';
import { Botoes } from '../../components/Botoes';

// Importe a fonte
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';
import FooterComponent from '../../components/footer';



export default function Informacoes() {
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

  return ( 

    <View>
        <Cabecalho/>
    
    <ScrollView>
    <View style={estilo.root}>
        <Botoes/>  
      <View style={estilobotoes.espacopv}>
        
        
        
        <View >
          <Text style={estilo.textStyle}>Informações gerais sobre o ENEM</Text>
          <View style={estilo.espacopv1}>
            <View>
              <Text style={estilo.titulos}>Datas e Inscrição:</Text>
              <Text  style={estilo.textos}>
                O ENEM é realizado anualmente em dois dias consecutivos, geralmente em novembro.
              </Text>
              <Text  style={estilo.textos}>
                As inscrições são feitas online no site oficial, onde os candidatos preenchem um formulário.
              </Text>
              <Pressable
                onPress={() => window.open('https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem', 'Vestibular')}>
                <Text style={estilo.linkEnem}>Site oficial do Enem</Text>
              </Pressable>
            </View>
            <View>
              <Text style={estilo.titulos}>Formato da Prova:</Text>
              <Text style={estilo.textos}>
                Composto por quatro provas objetivas (Linguagens, Matemática, Ciências Humanas e Ciências da Natureza) e uma redação dissertativa-argumentativa.
              </Text >
              <Text  style={estilo.textos}>A duração total do exame é de dois dias, com cinco horas e meia de prova por dia.</Text>
              <Text  style={estilo.textos}>Cada prova objetiva tem 45 questões de múltipla escolha.</Text>
              <Text  style={estilo.textos}>A redação requer a produção de um texto dissertativo-argumentativo, com mínimo de 7 e máximo de 30 linhas.</Text>
            </View>
            <View>
              <Text style={estilo.titulos}>Cotas e Ações Afirmativas:</Text>
              <Text  style={estilo.textos}>
                Adota cotas raciais e sociais para promover a inclusão de grupos étnico-raciais marginalizados e garantir maior acesso à educação para estudantes de baixa renda.
              </Text>
              <Text  style={estilo.textos}>Reserva vagas para pessoas com deficiência e indígenas.</Text>
              <Text  style={estilo.textos}>Os candidatos devem autodeclarar sua condição racial ou socioeconômica e comprovar deficiência ou etnia por meio de documentos durante o processo de inscrição.</Text>
              <Text  style={estilo.textos}>Os critérios de elegibilidade e comprovação são estabelecidos pelas instituições de ensino superior.</Text>
            </View>
          </View>
        </View>
      
      </View>
      </View>

      <FooterComponent/>
      </ScrollView>
    </View>
  );
}