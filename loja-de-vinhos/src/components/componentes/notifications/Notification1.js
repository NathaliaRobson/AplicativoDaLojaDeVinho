import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Notification1 = () => {
  const [cupomVisible, setCupomVisible] = useState(false);

  const toggleCupom = () => {
    setCupomVisible(!cupomVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cupom de Vinho</Text>
      <TouchableOpacity onPress={toggleCupom} style={styles.button}>
        <Text style={styles.buttonText}>
          {cupomVisible ? 'Fechar Cupom' : 'Receber Cupom'}
        </Text>
      </TouchableOpacity>
      {cupomVisible && (
        <View style={styles.cupomContainer}>
          <Text style={styles.cupomText}>50OFF</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#7E3030',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  cupomContainer: {
    backgroundColor: '#F8F8F8',
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cupomText: {
    fontSize: 24,
    color: '#7E3030',
    fontWeight: 'bold',
  },
});

export default Notification1;