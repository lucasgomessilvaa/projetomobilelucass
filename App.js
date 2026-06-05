import React, { useState } from 'react';

import HomeScreen from './HomeScreen';
import ProdutosScreen from './ProdutosScreen';
import DetalhesScreen from './DetalhesScreen';
import CarrinhoScreen from './CarrinhoScreen';
import PerfilScreen from './PerfilScreen';

export default function App() {
  const [tela, setTela] = useState('home');

  switch (tela) {
    case 'produtos':
      return <ProdutosScreen setTela={setTela} />;

    case 'detalhes':
      return <DetalhesScreen setTela={setTela} />;

    case 'carrinho':
      return <CarrinhoScreen setTela={setTela} />;

    case 'perfil':
      return <PerfilScreen setTela={setTela} />;

    default:
      return <HomeScreen setTela={setTela} />;
  }
}