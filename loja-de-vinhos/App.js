import React, { useState } from 'react';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Notifications from './src/screens/Notifications';
import Review from './src/screens/Review';
import Cart from './src/screens/Cart';
import { orderList } from "./src/data/pedidos";
import NotificationButton from './src/components/componentes/NotificationsButtom';
import { View, StyleSheet, Text } from 'react-native';
import Notification1 from './src/components/componentes/notifications/Notification1';
import Orders from './src/screens/Order';
import OrderDetail from './src/screens/OrderDetail';
import Profile from './src/screens/Profile';
import Payment from './src/screens/Payment';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack({ pedido, setPedido }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#42021c', 
        },
        headerTitleStyle: { color: 'white' }, 
      }}
    >
      <Stack.Screen
        name="HOME"
        component={Home}
      />

      <Stack.Screen
        name="Review"
        options={{ headerTitle: 'Informações' }}
      >
        {() => <Review route={useRoute()} setPedido={setPedido} pedido={pedido} />}
      </Stack.Screen>
      <Stack.Screen name="OrderDetail" component={OrderDetail} options={{ headerTitle: 'Detalhe do Pedido' }} />

      <Stack.Screen
        name="Payment"
        options={{ headerTitle: 'Pagamento', headerLeft: null }}
      >
        {() => <Payment navigation={useNavigation()} route={useRoute()} />}
      </Stack.Screen>

      <Stack.Screen name="Notifications" component={Notifications} options={{ headerRight: null, headerTitle: 'Notificações' }} />

      <Stack.Screen name="Notification1" component={Notification1} options={{ headerTitle: 'Notificação 1' }} />

    </Stack.Navigator>
  );
}

function MainTabs() {

  const [pedido, setPedido] = useState([]);
  const [pedidos, setPedidos] = useState(orderList);

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#42021D',
        },
        headerTitleStyle: { color: 'white' },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={26} color={focused ? '#42021D' : '#cacaca'} />
          ),
          headerShown: false,
          tabBarLabelStyle: { color: '#999' }
        }}
      >
        {() => <HomeStack setPedido={setPedido} pedido={pedido}  />}
      </Tab.Screen>
      <Tab.Screen
        name={'Carrinho'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="shopping-cart" size={26} color={focused ? '#42021D' : '#cacaca'} />
          ),
          tabBarLabelStyle: { color: '#999' },
          tabBarBadge: pedido.length > 0 ? <CartBadge pedidoLength={pedido.length} /> : null,
        }}
      >
        {() => <Cart navigation={useNavigation()} pedido={pedido} setPedido={setPedido} orderList={pedidos} setOrderList={setPedidos} />}
      </Tab.Screen>
      <Tab.Screen name="Pedidos" options={{
        tabBarIcon: ({ focused }) => <Icon name="list-ul" size={26} color={focused ? '#42021D' : '#cacaca'} />, tabBarLabelStyle: { color: '#999' }
      }} >
        {() => <Orders orderList={pedidos} navigation={useNavigation()} /> }
      </Tab.Screen>
      <Tab.Screen name="Perfil" component={Profile} options={{
        tabBarIcon: ({ focused }) => <Icon name="user-alt" size={26} color={focused ? '#42021D' : '#cacaca'} />, tabBarLabelStyle: { color: '#999' }
      }} />


    </Tab.Navigator>
  );
}

function CartBadge({ pedidoLength }) {
  return (
    <View style={styles.cartBadge}>
      <Text style={styles.cartBadgeText}>{pedidoLength}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});