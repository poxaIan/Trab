import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AutenticationContext';

export default function Tela3({ route, navigation }) {
  const { outputList } = route.params || []; // Verifique se route.params e outputList estão definidos

  const navigateToClasses = () => {
    navigation.navigate('Classes');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Jogadores Cadastrados:</Text>
      <FlatList
        data={outputList}
        renderItem={({ item }) => <Text style={styles.itemText}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Ir para Classes"
        onPress={navigateToClasses}
        color="#FF5733" // Altere a cor do botão
        style={styles.button} // Aplica um estilo de botão personalizado
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3cabf', // Adicione uma cor de fundo
    padding: 20,
    justifyContent: 'center', // Centralize o conteúdo verticalmente
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Centralize o texto
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    width: '50%', // Reduza o tamanho do botão para 50% da largura da tela
    alignSelf: 'center', // Centralize o botão horizontalmente
    marginTop: 20,
  },
});
