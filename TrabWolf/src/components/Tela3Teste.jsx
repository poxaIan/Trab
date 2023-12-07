import React, { useContext } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { AuthContext } from '../contexts/AutenticationContext';


export default function Tela3({ route, navigation }) { // Adicione 'navigation' como uma propriedade
  const { userInput, outputList } = route.params; // Acesse os dados passados como parâmetros

  const navigateToClasses = () => {
    navigation.navigate('Classes'); // Navegue para a tela 'Classes'
  };

  return (
    <View>
     
      <Text>Resultados Processados:</Text>
      <FlatList
        data={outputList}
        numColumns={3}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Ir para Classes"
        onPress={navigateToClasses}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#dcda48",
    flexGrow: 1,
    flexBasis: 0,
    margin: 4,
    padding: 20
  },
  text: {
    color: "#333333"
  }
});