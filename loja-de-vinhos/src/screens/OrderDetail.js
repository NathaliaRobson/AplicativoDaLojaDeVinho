import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const OrderDetail = ({ route, navigation }) => {
    const order = route.params.order;
    const renderWineItem = ({ item }) => {
    if (item && item[0] && item[0].imagem) {
        const vinho = item[0];
        return (
            <TouchableOpacity style={styles.wineItemContainer} onPress={() => { navigation.navigate('Review', { vinho }) }}>
                <Image source={vinho.imagem} style={styles.wineImage} />
                <View style={styles.wineInfo}>
                    <Text style={styles.wineName}>{vinho.nome}</Text>
                    <Text style={styles.wineRating}>{`Avaliação: ${vinho.rating}`}</Text>
                </View>
                <View style={styles.wineDetails}>
                    <Text style={styles.winePrice}>{`R$: ${vinho.preco}`}</Text>
                    <Text style={styles.wineQuantity}>{`Qnt: ${item[1]}`}</Text>
                    <Text style={styles.wineTotal}>{`Total: R$ ${parseFloat((vinho.preco * item[1]).toFixed(2))}`}</Text>
                </View>
            </TouchableOpacity>
        );
    } else {
        return null;
    }
};

    return (
        <View style={styles.container}>
            <View style={styles.orderInfoContainer}>
                <Text style={styles.orderInfo}>Informações do pedido:</Text>
                <Text style={styles.orderID}>{`ID: ${order.orderID}`}</Text>
                <Text style={styles.orderDate}>{`Data: ${order.orderDate}`}</Text>
        
                <Text style={styles.orderValue}>{`Valor: ${order.orderValue}`}</Text>
                
                <Text style={styles.deliveryStatus}>{`Status de Entrega: ${order.deliveryStatus}`}</Text>
            </View>
            <FlatList
                data={order.orderWines}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderWineItem}
                style={{marginBottom: 55}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#EBD4A2'
    },
    orderInfoContainer: {
        backgroundColor: 'white',
        padding: 12,
        marginBottom: 16,
        borderRadius: 10,
    },
    orderInfo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    orderID: {
        fontSize: 16,
        color: "#333",
        marginBottom: 8,
    },
    orderDate: {
        fontSize: 16,
        marginBottom: 8,
    },
    orderValue: {
        fontSize: 16,
        marginBottom: 8,
    },
    deliveryStatus: {
        fontSize: 16,
        marginBottom: 16,
    },
    wineItemContainer: {
        paddingVertical: 16,
        paddingRight: 16,
        backgroundColor: 'white',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginBottom: 16,
        borderRadius: 10,

    },
    wineImage: {
        width: 60,
        height: 80,
        resizeMode: 'contain',
        marginRight: 16,
    },
    wineInfo: {
        flex: 1,
        marginRight: 16,
    },
    wineDetails: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    wineName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    winePrice: {
        fontSize: 14,
    },
    wineQuantity: {
        fontSize: 14,
        marginBottom: 4,
    },
    wineTotal: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default OrderDetail;