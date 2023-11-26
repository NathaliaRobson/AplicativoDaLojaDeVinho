import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


const Profile = ({ navigation }) => {

    const [nome, setNome] = useState('Robersvaldo da Silva');
    const [telefone, setTelefone] = useState('(11) 98765-4321');
    const [endereco, setEndereco] = useState({ rua: 'R. Galeno de Castro', numero: '895', complemento: 'Ap 40' });

    const [modalVisible, setModalVisible] = useState(false);

    const [novoNome, setNovoNome] = useState(nome);
    const [novoTelefone, setNovoTelefone] = useState(telefone);
    const [novaRua, setNovaRua] = useState(endereco.rua);
    const [novoNumero, setNovoNumero] = useState(endereco.numero);
    const [novoComplemento, setNovoComplemento] = useState(endereco.complemento);

    const alterarDados = () => {
        setNome(novoNome);
        setTelefone(novoTelefone);
        setEndereco({ rua: novaRua, numero: novoNumero, complemento: novoComplemento });
        setModalVisible(false);
    };


    return (
        <>
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Nome"
                                value={novoNome}
                                onChangeText={(text) => setNovoNome(text)}
                            />
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Telefone"
                                value={novoTelefone}
                                onChangeText={(text) => setNovoTelefone(text)}
                            />
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Rua"
                                value={novaRua}
                                onChangeText={(text) => setNovaRua(text)}
                            />
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Nº"
                                value={novoNumero}
                                onChangeText={(text) => setNovoNumero(text)}
                            />
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Complemento"
                                value={novoComplemento}
                                onChangeText={(text) => setNovoComplemento(text)}
                            />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginRight: 10 }}>
                                    <Button title="Cancelar" onPress={() => setModalVisible(false)} />
                                </View>
                                <Button title="Salvar" onPress={alterarDados} />
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={styles.identification}>
                    <Image source={require('../imagens/persona.png')} style={styles.photo} />
                    <Text style={styles.userName}>{nome}</Text>
                    <Text style={styles.userInfo}>Tel.: {telefone}</Text>
                    <Text style={styles.userInfo}>Endereço: Rua {endereco.rua}, Nº {endereco.numero}, {endereco.complemento}</Text>
                    <View style={styles.gameInfo}>
                        <View style={styles.gameInfoCard}>
                            <Icon name="star" size={30} color="#7E3030" />
                            <Text style={styles.gameInfoTitle}>Pontos</Text>
                            <Text style={styles.gameInfoValue}>550</Text>
                        </View>

                        <View style={styles.gameInfoCard}>
                            <Icon name="list" size={30} color="#7E3030" />
                            <Text style={styles.gameInfoTitle}>Pedidos</Text>
                            <Text style={styles.gameInfoValue}>7</Text>
                        </View>

                        <View style={styles.gameInfoCard}>
                            <Icon name="edit" size={30} color="#7E3030" />
                            <Text style={styles.gameInfoTitle}>Avaliações</Text>
                            <Text style={styles.gameInfoValue}>4</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => { setModalVisible(!modalVisible) }}>
                        <Text style={styles.buttonText}>Editar Informações</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBD4A2',
        padding: 20,
        justifyContent: 'space-between',
    },
    identification: {
        backgroundColor: '#fefefe',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5
    },
    photo: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#7E3030',
    },
    userInfo: {
        fontSize: 16,
        marginTop: 5,
        color: '#7E3030',
    },
    gameInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    gameInfoCard: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        flex: 1,
        margin: 5,
    },
    gameInfoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#7E3030',
    },
    gameInfoValue: {
        fontSize: 16,
        color: '#7E3030',
    },
    buttonsContainer: {
        backgroundColor: '#ebd3a3',
        borderRadius: 10,
        padding: 20,
        elevation: 5
    },
    button: {
        backgroundColor: '#42021c',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#F8F8F8',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalInput: {
        margin: 20,
        borderBottomColor: '#7E3030',
        borderBottomWidth: 2

    }
});

export default Profile;