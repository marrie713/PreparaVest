
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/home/index.jsx";
import PaginaEnem from "./screens/pgENEM/index.jsx";
import Cadastro from "./screens/Cadastro/index.jsx";
import Login from "./screens/Login/index.jsx";
import FooterComponent from "./components/footer/index.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PaginaEnem" component={PaginaEnem} />
      </Stack.Navigator>
    </NavigationContainer>
)}
