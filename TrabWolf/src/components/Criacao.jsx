import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AutenticationContext';

const contador = 0;

export default function Criacao({ navigation }) {
  const { userInput, setUserInput, outputList, setOutputList } = useContext(AuthContext);
  const [contador, setContador] = useState(1);

  const handleInputChange = (text) => {
    setUserInput(text);
  };

  const handleButtonPress = () => {
    const newItem = `Jogador ${contador}: ${userInput}`;
    setOutputList([...outputList, newItem]);
    setUserInput('');
    setContador(contador + 1);
  };

  const navigateToTela3 = () => {
    navigation.navigate('Biblioteca', { outputList });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Insira informações aqui"
        onChangeText={handleInputChange}
        value={userInput}
      />
      <Button
        title="Processar"
        onPress={handleButtonPress}
        color="#FF5733" // Altere a cor do botão
      />
      
      <FlatList
        data={outputList}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Biblioteca Jogadores"
        onPress={navigateToTela3}
        color="#FF5733" // Altere a cor do botão
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3cabf', // Cor de fundo
    padding: 20,
    justifyContent: 'center', // Centralize o conteúdo verticalmente
  },
  input: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFFFFF', // Cor de fundo do input
    borderRadius: 5, // Borda arredondada
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
});
