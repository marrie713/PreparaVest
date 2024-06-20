import { card } from "./style";
import { Icon } from "react-native-elements";
import { useEffect, useState } from 'react';
import { apiConfig } from '../../utils/api';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Pressable} from 'react-native';

export function CardQuestoes({materia}){

    const [questoes, setQuestoes] = useState([]);

  useEffect(() =>{
    apiConfig.get(`/questao/${materia}`).then((res)=>{
        setQuestoes(res.data)
    })
  },[])

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
    
    return(
        <View style={card.root}>
        <View style={card.questoes}>
            <View style={{flexDirection: 'row', justifyContent: 'center', gap: 40}}>
                    <Text style={card.titulo}>Questões</Text>
            </View>

            <SafeAreaView style={styles.container}>
            <FlatList
                data={questoes}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                   return <Text>{item.enunciado}</Text>
                }}
            />
            </SafeAreaView>
        
                </View>
            </View>
    )
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
  });