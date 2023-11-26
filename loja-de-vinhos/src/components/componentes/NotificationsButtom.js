import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NotificationButton = (props) => {
  const [showBadge, setShowBadge] = useState(true);

  const handleNotificationPress = () => {
    props.navigation.navigate('Notifications');
    setShowBadge(false); // Oculta o badge ao clicar no ícone de notificação
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNotificationPress}
    >
      <View style={styles.iconContainer}>
        <Icon name="bell-o" size={26} color="#fff" />

        {showBadge && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>3</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  iconContainer: {
    position: 'relative', // Permite que os elementos filhos sejam posicionados relativamente a este container
  },
  notificationBadge: {
    position: 'absolute', // Isso posiciona o badge de notificação absolutamente
    backgroundColor: 'red',
    borderRadius: 10, // Define o tamanho da bolinha vermelha
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: -5, // Posiciona o badge 5 pixels acima do ícone do sino
    right: -8, // Posiciona o badge 5 pixels à esquerda do ícone do sino
  },
  notificationText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default NotificationButton;