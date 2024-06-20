import { View, Text, Pressable, StatusBar, StyleSheet } from "react-native";
import { card } from "../CardQuestao/style";
import { useState } from "react";
 
export default function QuestaoVerificada({enunciado, alternativas, correta}){
      
        const [selecionaopcao, setselecionaopcao] = useState('');
        const [Correto, setCorreto] = useState('');
        
        function Verificar(option) {
            setselecionaopcao(option);
            if (correta === option) {
              setCorreto(true);
            } else {
              setCorreto(false);
            }
          }

        return (
            <View style={{ gap: 15, overflow: 'hidden', fontFamily: 'Kollektif' }}>
              <View>
                <Text style={{ width: 600 }}>{enunciado}</Text>
              </View>
              <View style={{ marginBottom: 50, gap: 8 }}>
                {/* {alternativas.map((option) => (
                  <View style={{ flexDirection: 'row' }} key={option}>
                    <Pressable
                      style={card.alternativas}
                      onPress={() => Verificar(option)}
                    >
                      <Text>{option.toUpperCase()}</Text>
                    </Pressable>
                    <Text> {option}</Text>
                  </View>
                ))}
                {selecionaopcao && (
                  <Text style={Correto ? styles.correctText : styles.incorrectText}>
                    {Correto ? 'Correto!' : 'Errado!'}
                  </Text>
                )} */}
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