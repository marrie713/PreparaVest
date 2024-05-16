
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/home/index.jsx";
import PaginaEnem from "./screens/pgENEM/index.jsx";
import Informacoes from "./screens/InfoGerais/index.jsx";
import Conteudorel from "./screens/ContRelevante/index.jsx";
import { Questoes } from "./screens/Questoes/index.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Conteúdo relevante">
        <Stack.Screen name="Conteúdo relevante" component={Conteudorel}/>
        <Stack.Screen name="Questoes" component={Questoes} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Informações" component={Informacoes} />
        <Stack.Screen name="Pagina Enem" component={PaginaEnem} />
      </Stack.Navigator>
    </NavigationContainer>
)}
