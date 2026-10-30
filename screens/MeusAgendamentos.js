import { Text } from 'react-native';
import { Pagina, Painel, Botao, estilos } from '../components/ui.js';
import { ordenar, formatarData } from '../data/horarios.js';
export default function MeusAgendamentos({ horarios, usuario, cancelar }) {
  const meus = ordenar(horarios.filter(function meu(h) { return h.cliente === usuario.nome; }));
  return <Pagina><Text style={estilos.titulo}>Seus próximos cortes</Text>
    <Text style={estilos.subtitulo}>Ao cancelar, o horário volta a ficar disponível nesta demonstração.</Text>
    {!meus.length && <Text style={estilos.texto}>Você ainda não tem agendamentos. Volte para escolher um horário.</Text>}
    {meus.map(function item(h) { return <Painel key={h.id}>
      <Text style={estilos.titulo}>{h.hora}</Text><Text style={estilos.texto}>{formatarData(h.data)} · Corte de cabelo</Text>
      <Botao titulo={'Cancelar ' + h.hora} variante="perigo" onPress={function acao() { cancelar(h.id); }} />
    </Painel>; })}
  </Pagina>;
}
