import React from "react";
import { View, Text } from "react-native";
import Estilos from "../estilos/Estilos";

const Carrinho = () => {
  // Lógica do carrinho (substitua pelo seu código real)
  const itemsNoCarrinho = 3;

  return (
    <View style={Estilos.container}>
      <Text style={Estilos.titulo}>Carrinho</Text>
      <Text style={Estilos.texto}>Itens no carrinho: {itemsNoCarrinho}</Text>
      {/* Adicione mais detalhes do carrinho conforme necessário */}
    </View>
  );
};

export default Carrinho;
