import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image } from "react-native";

const Cart = ({ navigation, pedido, setPedido, orderList, setOrderList }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = pedido.reduce((acc, [vinho, quantidade]) => acc + vinho.preco * quantidade, 0);
    setTotal(parseFloat(newTotal.toFixed(2)));
  }, [pedido]);

  const handleFinalizar = () => {
    navigation.navigate('Payment', { valor: total, pedido, setPedido, orderList, setOrderList });
  };

  const handleClearCart = () => {
    setPedido([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {pedido.length === 0 ? (
          <Text>Seu carrinho está vazio</Text>
        ) : (
          <>
            <FlatList
              data={pedido}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => <ItemCart item={item} />}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleFinalizar}
              >
                <Text style={styles.buttonText}>Finalizar: R${total}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={handleClearCart}
            >
              <Text style={styles.clearButtonText}>Limpar Carrinho</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const ItemCart = ({ item }) => {
  const [vinho, quantidade] = item;
  const total = vinho.preco * quantidade;

  return (
    <View style={styles.cartItem}>
      <Image source={ vinho.imagem } style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{vinho.nome}</Text>
        <View>
          <Text style={styles.itemPrice}>Valor: {vinho.preco}</Text>
          <Text style={styles.itemQuantity}>Quantidade: {quantidade}</Text>
        </View>
        <Text style={styles.itemTotal}>Total: {parseFloat(total.toFixed(2))}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,
    backgroundColor: '#ebd3a3', 
 
  },
  content: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
    flex: 1
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#edc967',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    resizeMode: 'contain',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
  },
  itemQuantity: {
    fontSize: 16,
  },
  itemTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  clearButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  clearButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Cart;