import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Estilos from "../estilos/Estilos";

const ListaVinhos = ({ navigation }) => {
  const [vinhos, setVinhos] = useState([]);

  useEffect(() => {
   
    const vinhosData = [
      { id: 1, nome: "Vinho Tinto 1", imagem: require("../imagens/Tintos/1.jpg") },
      { id: 2, nome: "Vinho Branco 1", imagem: require("../imagens/Brancos/1.jpg") },
      { id: 1, nome: "Vinho Seco 1", imagem: require("../imagens/Secos/1.jpg") },
      { id: 2, nome: "Vinho Rose 1", imagem: require("../imagens/Rose/1.jpg") }
   
    ];
    setVinhos(vinhosData);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={Estilos.itemContainer}
      onPress={() => navigation.navigate("DetalhesVinho", { vinho: item })}
    >
      <Image style={Estilos.itemImagem} source={item.imagem} />
      <Text style={Estilos.itemNome}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={Estilos.container}>
      <FlatList
        data={vinhos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ListaVinhos;
