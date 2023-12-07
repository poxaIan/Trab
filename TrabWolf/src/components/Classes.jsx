import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const MyCarousel = () => {
  const dataTop = [
    { id: '1', image: require('../img/1_Corno.jpg'), text: 'Corno \nLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, omnis?'},
    { id: '2', image: require('../img/1_Fofito.jpg'), text: 'Fofito \nLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, omnis?'},
    { id: '3', image: require('../img/1_Leonardo.jpg'), text: 'Leonardo \nLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, omnis?'},
    { id: '4', image: require('../img/1_Panino.jpg'), text: 'Panino \nLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, omnis?'},
    { id: '5', image: require('../img/1_Sr_Raposo.jpg'), text: 'Sr_Raposo \nLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, omnis?' },
    { id: '6', image: require('../img/1_Xininho.jpg'), text: 'Xininho \nLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, omnis?' },// Dados do primeiro carrossel
  ];

  const dataBottom = [
    { id: '7', image: require('../img/2_Executor.jpg'), text: 'Executor \nLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, omnis?' },
    { id: '8', image: require('../img/2_Mago.jpg'), text: 'Mago \nLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, omnis?' },
    { id: '9', image: require('../img/2_Monge.jpg'), text: 'Monge \nLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, omnis?' },
    { id: '10', image: require('../img/2_Ninja.jpg'), text: 'Ninja \nLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, omnis?' },
    { id: '11', image: require('../img/2_Peste.jpg'), text: 'Peste \nLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, omnis?' },
    { id: '12', image: require('../img/2_Verdão.jpg'), text: 'Verdão \nLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, omnis?' },// Dados do segundo carrossel
  ];

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <Carousel
          data={dataTop}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={200}
        />
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          data={dataBottom}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={200}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3cabf', // Cor de fundo para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    fontSize: 18,
    textAlign: 'center', // Centraliza o texto horizontalmente
  },
  carouselContainer: {
    flex: 1, // Certifique-se de que cada container tenha um flex igual para ocupar espaço igual
    marginVertical: 20,
    alignItems: 'center',
  },
  slide: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyCarousel;
