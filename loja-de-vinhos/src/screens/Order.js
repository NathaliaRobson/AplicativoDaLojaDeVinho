import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const Order = ({ order }) => {
    const navigation = useNavigation();

    const calculateTotalValue = (wine) => {
        let totalValue = 0;
        for (const vinho of wine) {
            totalValue += wine[0].preco * wine[1];
        }
        return totalValue.toFixed(2);
    };

    return (
        <TouchableOpacity style={styles.orderContainer}
            onPress={() => navigation.navigate('OrderDetail', { order })}>

            <Text style={styles.orderInfo}>{`ID: `}<Text style={styles.orderID}>{order.orderID}</Text></Text>
            <Text style={styles.orderDate}>{`Data do Pedido: ${order.orderDate}`}</Text>
            <Text style={styles.orderValue}>{`Valor: ${order.orderValue = calculateTotalValue(order.orderWines)}`}</Text>
            <Text style={styles.deliveryStatus}>{`Status de Entrega: ${order.deliveryStatus}`}</Text>
        </TouchableOpacity>
    );
}

const Orders = ({ orderList}) => {
    return (
        <View>
            <FlatList
                data={orderList}
                keyExtractor={(item, index) => index.toString()}
                style={styles.container}
                renderItem={({ item }) => <Order order={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#EBD4A2'
    },
    orderContainer: {
        backgroundColor: "#f8f8f8",
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
    },
    orderInfo: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    orderID: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#9a9a9a",
    },
    orderDate: {
        fontSize: 14,
    },
    orderValue: {
        fontSize: 14,
    },
    deliveryStatus: {
        fontSize: 14,
    },
});

export default Orders;