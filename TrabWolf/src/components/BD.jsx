import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

function UsuariosDetails({ route }) {
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 60,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 50
    },
    contactContainer: {
        paddingHorizontal: 50,
        paddingBottom: 90,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default UsuariosDetails;