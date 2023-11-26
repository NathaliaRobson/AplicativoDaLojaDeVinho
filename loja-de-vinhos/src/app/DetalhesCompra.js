import React from "react";
import { View, Text } from "react-native";
import Estilos from "../estilos/Estilos";

const DetalhesCompra = () => {
  // Lógica para obter detalhes da compra (substitua pelo seu código real)
  const detalhesCompra = {
    total: 100.0,
    produtos: [
      { id: 1, nome: "Vinho Tinto", preco: 50.0, quantidade: 2 },
      { id: 2, nome: "Vinho Branco", preco: 25.0, quantidade: 1 },
    ],
  };

  return (
    <View style={Estilos.container}>
      <Text style={Estilos.titulo}>Detalhes da Compra</Text>
      <Text style={Estilos.texto}>Total: R$ {detalhesCompra.total.toFixed(2)}</Text>
      {/* Adicione mais detalhes da compra conforme necessário */}
    </View>
  );
};

export default DetalhesCompra;
