import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../contexts/AutenticationContext';

export default function TelaInicial(props) {
    const navigation = useNavigation();
    const { data, setData } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LOBOS TRAVESSOS!!! AAUUUUUU</Text>
            <Button
                title='Novo Jogo' 
                onPress={() => navigation.navigate("Personagens")}
                color='#FF5733'
                style={styles.button}
            />
            <Image
                source={require('../img/lobo.gif')} // Substitua pelo caminho correto para o seu arquivo GIF
                style={styles.gif}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3cabf',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        width: '80%',
        marginBottom: 10,
        fontSize: 30,
        fontFamily: 'Arial',
    },
    gif: {
        width: 200, // Ajuste o tamanho do GIF conforme necessário
        height: 200, // Ajuste o tamanho do GIF conforme necessário
        marginTop: 20, // Espaço entre o texto/botão e a imagem GIF
    },
});
