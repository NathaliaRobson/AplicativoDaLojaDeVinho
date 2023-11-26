import Rect, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Payment = ({ route, navigation }) => {
  const [total, setTotal] = useState(route.params.valor);
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false); // State para controlar o modal

  const handlePayment = () => {
    // Remover espaços em branco do número do cartão
    const cleanedCardNumber = cardNumber.replace(/\s/g, '');

    // Validação básica do número do cartão
    if (!cleanedCardNumber || !/^\d{16}$/.test(cleanedCardNumber)) {
      setErrorMessage('Número do cartão inválido. Deve ter 16 dígitos.');
      return;
    }

    // Adicionar espaços a cada 4 dígitos
    const formattedCardNumber = cleanedCardNumber.replace(/(\d{4})/g, '$1 ');

    setCardNumber(formattedCardNumber); // Atualize o estado com os espaços adicionados

    if (!cardHolder || !/^[A-Za-z\s]+$/.test(cardHolder)) {
      setErrorMessage('Nome no cartão inválido.');
      return;
    }

    if (!expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      setErrorMessage('Data de validade inválida. Use o formato MM/YY.');
      return;
    }

    if (!cvv || !/^\d{3,4}$/.test(cvv)) {
      setErrorMessage('CVV inválido. Deve ter 3 dígitos.');
      return;
    }
    // Lógica de pagamento
    setIsPaymentSuccess(true);
  };

  const generateRandomId = () => {
    const min = 1000000000; // 7 dígitos
    const max = 9999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const closeModal = () => {
    const nf = {
      orderID: generateRandomId().toString(),
      orderDate: getCurrentDate(),
      orderValue: '12345',
      orderWines: route.params.pedido,
      deliveryStatus: 'Em separação',
    };

    route.params.setOrderList([nf, ...route.params.orderList]);

    route.params.setPedido([]);
    setTotal(0);
    setIsPaymentSuccess(false);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text>Número do Cartão</Text>
      <TextInput
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder="XXXX XXXX XXXX XXXX"
        style={styles.input}
        maxLength={16} // limita a entrada a 16 dígitos e 3 espaços
      />

      <Text>Nome no Cartão</Text>
      <TextInput
        value={cardHolder}
        onChangeText={setCardHolder}
        placeholder="NOME COMPLETO"
        style={styles.input}
        maxLength={35}
      />

      <Text>Data de Validade</Text>
      <TextInput
        value={expiryDate}
        onChangeText={setExpiryDate}
        placeholder="MM/YY"
        style={styles.input}
        maxLength={5}
      />

      <Text>CVV</Text>
      <TextInput
        value={cvv}
        onChangeText={setCvv}
        placeholder="CVV"
        style={styles.input}
        maxLength={3}
      />

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>R$ {total}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        title="Pagar"
        onPress={handlePayment}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>

      {/* Modal de Pagamento Bem-Sucedido */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={isPaymentSuccess}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Icon name="check-circle" size={80} color="white" />
            <Text style={styles.successText}>Pagamento Concluído</Text>
            <Text style={styles.successSubtext}>Obrigado pela sua compra!</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EBD4A2',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  successText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    color: '#7E3030',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    alignItems: 'center',
  },

  successSubtext: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#7E3030',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Payment;