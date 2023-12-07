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







  const [selectedPage, setSelectedPage] = useState('');
  const [usuariosData, setUsuariosData] = useState(null);

  useEffect(() => {
    if (route.params && route.params.usuariosId) {
      const dogIdToFind = route.params.usuariosId;

      fetchUsuariosData()
        .then((data) => {
          const foundUsuarios = data.usuarios.find((usuarios) => usuarios.id === dogIdToFind);
          if (foundUsuarios) {
            setUsuariosData(foundUsuarios);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [route.params]);

  const fetchUsuariosData = async () => {
    try {
      const response = await fetch('https://vercel.com/ians-projects-c74f457a/trab-kzaf');

      if (!response.ok) {
        throw new Error('Erro na solicitação à API');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
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
      <ScrollView>
        {usuariosData && (
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: usuariosData.photo }} style={styles.image} />
            </View>
            <View style={styles.contactContainer}>
              <Text style={styles.heading}>Id: {usuariosData.id}</Text>
              <Text style={styles.heading}>Nome: {usuariosData.nome}</Text>
              <Text style={styles.heading}>Email: {usuariosData.email}</Text>
              <Text style={styles.heading}>Altura: {usuariosData.altura}</Text>
              <Text style={styles.heading}>Peso: {usuariosData.peso}</Text>
            </View>
          </View>
        )}
        <Footer selectedPage={selectedPage} handlePageSelect={(page) => setSelectedPage(page)} />
      </ScrollView>
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
