import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5';


const BottomMenu = ({ navigation }) => {
    return (
        <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={styles.menuItem}>
                    <Icon name="home" size={26} color="#fff" />
                    <Text style={styles.textMenu}>Home</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <View style={styles.menuItem}>
                    <Icon name="shopping-cart" size={26} color="#fff" />
                    <Text style={styles.textMenu}>Carrinho</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                <View style={styles.menuItem}>
                    <Icon name="list-ul" size={26} color="#fff" />
                    <Text style={styles.textMenu}>Pedidos</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View style={styles.menuItem}>
                    <Icon name="user-alt" size={26} color="#fff" />
                    <Text style={styles.textMenu}>Conta</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    menu: {
        flexDirection: 'row',
        backgroundColor: '#EBD4A2',
        justifyContent: 'space-between',
        height: 65,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    menuItem: {
        flex: 1,
        alignItems: 'center',
    },
    
    textMenu: {
        color: '#FFFFFF',
        fontSize: 12,
    }
})

export default BottomMenu