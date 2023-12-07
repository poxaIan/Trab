import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaInicial from './src/components/TelaInicial'
import Criacao from './src/components/Criacao'
import Tela3 from './src/components/Tela3'
import Classes from './src/components/Classes'
import AuthProvider from './src/contexts/AutenticationContext'; // Importe o AuthProvider


const navStack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <navStack.Navigator>
          <navStack.Screen name='TelaInicial' component={TelaInicial} />
          <navStack.Screen name='Biblioteca' component={Tela3} />
          <navStack.Screen name='Personagens' component={Criacao} /> 
          <navStack.Screen name='Classes' component={Classes} />
        </navStack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  ); // 
}