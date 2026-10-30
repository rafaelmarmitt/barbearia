import { Text } from 'react-native';
import { Pagina, Painel, Botao, estilos } from '../components/ui.js';
import { ordenar, formatarData } from '../data/horarios.js';
export default function PainelAdmin({ navigation, horarios, sair }) {
  return <Pagina><Text style={estilos.titulo}>Organize os atendimentos</Text>
    <Text style={estilos.subtitulo}>Veja quem está marcado em cada horário e abra novas vagas na agenda.</Text>
    <Botao titulo="Criar horário disponível" onPress={function abrir() { navigation.navigate('CriarHorario'); }} />
    {ordenar(horarios).map(function item(h) { return <Painel key={h.id}>
      <Text style={estilos.titulo}>{h.hora}</Text><Text style={estilos.texto}>{formatarData(h.data)} · {h.cliente ? 'Agendado' : 'Disponível'}</Text>
      <Text style={estilos.texto}>{h.cliente ? 'Cliente: ' + h.cliente : 'Nenhum cliente marcado.'}</Text>
    </Painel>; })}
    <Botao titulo="Sair" variante="secundario" onPress={sair} />
  </Pagina>;
}
