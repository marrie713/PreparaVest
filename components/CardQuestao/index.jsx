import { card } from "./style";
import { useEffect, useState } from 'react';
import { apiConfig } from '../../utils/api';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Pressable } from 'react-native';
import { estiloquestoes } from "../../screens/Questoes/style";
import BasicExample from "../../screens/dropdawn";
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';
import * as Font from 'expo-font';
import QuestaoVerificada from "../VerificarQuestoes";


export function CardQuestoes() {
  const [questoes, setQuestoes] = useState([]);
  const [materia, setMateria] = useState('matemática');
  

  // useEffect(() => {
  //   async function loadFonts() {
  //     await Font.loadAsync({
  //       KollektifBold: KollektifBold,
  //       Kollektif: Kollektif,
  //     });
  //     setFontsLoaded(true);
  //   }

  //   loadFonts();
  // }, []);

  useEffect(() => {
    console.log(materia);
    apiConfig.get(`/questao/${materia}`).then((res) => {
      setQuestoes(res.data);
    });
  }, [materia]);

  function mudarMateria(novaMateria) {
    setMateria(novaMateria);
  }

  return (
    <View style={{ flexDirection: 'row', gap: 50 }}>
      <View style={card.questoes}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 40 }}>
          <Text style={card.titulo}>Questões</Text>
        </View>

        <SafeAreaView>
          <FlatList
            data={questoes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              <QuestaoVerificada enunciado={item.enunciado} alternativas={[item.a, item.b, item.c, item.d, item.e]} correta={item.correta}/>
            }}
          />
        </SafeAreaView>
      </View>

      <View>
        <Text style={estiloquestoes.textmateria}>Selecione a matéria</Text>
        <BasicExample funcao={mudarMateria} />
      </View>
    </View>
  );
}


