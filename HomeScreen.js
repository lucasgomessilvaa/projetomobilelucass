import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ setTela }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🧸 ToyStore</Text>

      <TouchableOpacity style={styles.botao} onPress={() => setTela('produtos')}>
        <Text style={styles.texto}>Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => setTela('carrinho')}>
        <Text style={styles.texto}>Carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => setTela('perfil')}>
        <Text style={styles.texto}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center'},
  titulo:{fontSize:32,fontWeight:'bold',marginBottom:30},
  botao:{backgroundColor:'#4ECDC4',padding:15,width:220,borderRadius:12,marginBottom:10},
  texto:{color:'#fff',textAlign:'center',fontWeight:'bold'}
});