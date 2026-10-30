import { useState } from 'react';
import { Text } from 'react-native';
import { Pagina, Painel, Botao, Aviso, estilos } from '../components/ui.js';
import { ordenar, formatarData } from '../data/horarios.js';
export default function Horarios({ navigation, horarios, usuario, reservar, sair }) {
  const [mensagem, setMensagem] = useState('');
  const livres = ordenar(horarios.filter(function livre(h) { return !h.cliente; }));
  return <Pagina>
    <Text style={estilos.titulo}>Olá, {usuario.nome}.</Text>
    <Text style={estilos.subtitulo}>Escolha seu horário. Cada atendimento ocupa uma hora, com um barbeiro nesta primeira versão.</Text>
    <Botao titulo="Ver meus agendamentos" variante="secundario" onPress={function abrir() { navigation.navigate('MeusAgendamentos'); }} />
    <Aviso mensagem={mensagem} tipo="sucesso" />
    {!livres.length && <Text style={estilos.texto}>Não há horários disponíveis. Consulte novamente mais tarde.</Text>}
    {livres.map(function item(h) { return <Painel key={h.id}>
      <Text style={estilos.titulo}>{h.hora}</Text><Text style={estilos.texto}>{formatarData(h.data)} · Corte de cabelo · 1 hora</Text>
      <Botao titulo={'Agendar ' + h.hora} onPress={function agendar() { reservar(h.id); setMensagem('Horário reservado na demonstração. Consulte em Meus agendamentos.'); }} />
    </Painel>; })}
    <Botao titulo="Sair" variante="secundario" onPress={sair} />
  </Pagina>;
}
