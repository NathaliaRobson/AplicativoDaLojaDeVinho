import React from "react";
import { View, Text, Image } from "react-native";
import Estilos from "../estilos/Estilos";

const DetalhesVinho = ({ route }) => {
  const { vinho } = route.params;

  return (
    <View style={Estilos.container}>
      <Image style={Estilos.detalhesImagem} source={vinho.imagem} />
      <Text style={Estilos.detalhesNome}>{vinho.nome}</Text>

      <Image style={Estilos.detalhesImagem} source={vinho.imagem} />
      <Text style={Estilos.detalhesNome}>{vinho.nome}</Text>

      <Image style={Estilos.detalhesImagem} source={vinho.imagem} />
      <Text style={Estilos.detalhesNome}>{vinho.nome}</Text>

      <Image style={Estilos.detalhesImagem} source={vinho.imagem} />
      <Text style={Estilos.detalhesNome}>{vinho.nome}</Text>
      
      <Image style={Estilos.detalhesImagem} source={vinho.imagem} />
      <Text style={Estilos.detalhesNome}>{vinho.nome}</Text>

      
    </View>
  );
};

export default DetalhesVinho;
