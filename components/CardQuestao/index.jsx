import { card } from "./style";
import { useEffect, useState } from 'react';
import { apiConfig } from '../../utils/api';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Pressable } from 'react-native';
import { estiloquestoes } from "../../screens/Questoes/style";
import BasicExample from "../../screens/dropdawn";


export function CardQuestoes() {
  const [questoes, setQuestoes] = useState([]);
  const [materia, setMateria] = useState('matemática');
  const [selectedOptions, setSelectedOptions] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});


  useEffect(() => {
    console.log(materia);
    apiConfig.get(`/questao/${materia}`).then((res) => {
      setQuestoes(res.data);
    });
  }, [materia]);

  function mudarMateria(novaMateria) {
    setMateria(novaMateria);
  }

  function handleOptionPress(itemId, option, correctOption) {
    setSelectedOptions(prev => ({ ...prev, [itemId]: option }));
    setCorrectAnswers(prev => ({ ...prev, [itemId]: correctOption === option }));
  }

  return (
    <View style={{ flexDirection: 'row', gap: 50 }}>
      <View style={card.questoes}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 40 }}>
          <Text style={card.titulo}>Questões</Text>
        </View>

        <SafeAreaView style={styles.container}>
          <FlatList
            data={questoes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              const isSelectedOptionCorrect = correctAnswers[item.id];
              const selectedOption = selectedOptions[item.id];
              return (
                <View style={{ gap: 15, overflow: 'hidden', fontFamily: 'Kollektif' }}>
                  <View>
                    <Text style={{ width: 600 }}>{item.enunciado}</Text>
                  </View>
                  <View style={{ marginBottom: 50, gap: 8 }}>
                    {['a', 'b', 'c', 'd', 'e'].map((option) => (
                      <View style={{ flexDirection: 'row' }} key={option}>
                        <Pressable
                          style={card.alternativas}
                          onPress={() => handleOptionPress(item.id, option, item.correta)}
                        >
                          <Text>{option.toUpperCase()}</Text>
                        </Pressable>
                        <Text> {item[option]}</Text>
                      </View>
                    ))}
                    {selectedOption && (
                      <Text style={isSelectedOptionCorrect ? styles.correctText : styles.incorrectText}>
                        {isSelectedOptionCorrect ? 'Correto!' : 'Errado!'}
                      </Text>
                    )}
                  </View>
                </View>
              );
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.00,
    elevation: 15,
    padding: 10,
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  correctText: {
    color: 'green',
    marginTop: 10,
  },
  incorrectText: {
    color: 'red',
    marginTop: 10,
  },
});
