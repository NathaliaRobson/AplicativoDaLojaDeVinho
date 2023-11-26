import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { tintos, roses, secos, brancos } from '../data/vinhos';
import logo from '../imagens/logo.png';

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Section label="Tintos" data={tintos} navigation={navigation} />
        <Section label="Roses" data={roses} navigation={navigation} />
        <Section label="Secos" data={secos} navigation={navigation} />
        <Section label="Brancos" data={brancos} navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const Section = ({ label, data, navigation }) => (
  <View>
    <Text style={styles.sectionLabel}>{label}</Text>
    <View style={styles.cardContainer}>
      {data.map((item, index) => (
        index % 2 === 0 && (
          <View key={index} style={styles.cardRow}>
            <Vinho {...item} navigation={navigation} />
            {index + 1 < data.length && <Vinho {...data[index + 1]} navigation={navigation} />}
          </View>
        )
      ))}
    </View>
  </View>
);

const Vinho = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Review', { vinho: { ...props } })}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={props.imagem} style={styles.image} resizeMode="contain" />
        </View>
        <Text style={styles.name}>{props.nome}</Text>
        <View style={styles.countryContainer}>
          <Image source={props.bandeira} style={styles.bandeira} />
          <View style={styles.textContainer}>
            <Text style={styles.country}>{props.cidade}</Text>
          </View>
        </View>
        <View style={styles.teorContainer}>
          <Text style={styles.text}>Teor Alcoólico:</Text>
          <Text style={styles.text}>{props.teorAlcool}%</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>R${props.preco}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={18} color={'yellow'} />
            <Text style={styles.rating}>{props.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#EBD4A2',
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    marginTop: 10,
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    width: 139,
    height: 210,
    flex:1,
  },
  teorContainer: {
    marginTop: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
    marginHorizontal: 5
  },
  textContainer: {
    marginLeft: 4,
  },
  text: {
    fontSize: 12,
    marginTop: 0,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 10,
  },
   logo: {
    width: 200, // Ajuste conforme necessário
    height: 200, // Ajuste conforme necessário
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default Home;
