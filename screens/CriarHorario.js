import { useState } from 'react';
import { Text } from 'react-native';
import { Pagina, Painel, Campo, Botao, Aviso, estilos } from '../components/ui.js';
import { dataInicial } from '../data/horarios.js';
export default function CriarHorario({ navigation, horarios, criar }) {
  const [data, setData] = useState(dataInicial);
  const [hora, setHora] = useState('15:00');
  const [erro, setErro] = useState('');
  function salvar() {
    const inicio = new Date(data + 'T' + hora + ':00');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data) || !/^([01]\d|2[0-3]):00$/.test(hora) || Number.isNaN(inicio.getTime()) || inicio.getDate() !== Number(data.slice(8))) {
      setErro('Informe uma data válida (AAAA-MM-DD) e uma hora cheia (por exemplo, 15:00).'); return;
    }
    if (inicio <= new Date()) { setErro('Escolha uma data e hora no futuro.'); return; }
    if (horarios.some(function existe(h) { return h.data === data && h.hora === hora; })) { setErro('Esse horário já existe. Escolha outro.'); return; }
    criar({ data, hora }); navigation.goBack();
  }
  return <Pagina><Painel><Text style={estilos.titulo}>Uma nova vaga na agenda</Text>
    <Text style={estilos.subtitulo}>Atendimentos de uma hora, sempre em hora cheia. Os clientes poderão reservar esta vaga.</Text>
    <Campo rotulo="Data (AAAA-MM-DD)" value={data} onChangeText={setData} placeholder="2026-11-05" />
    <Campo rotulo="Horário (HH:00)" value={hora} onChangeText={setHora} placeholder="15:00" />
    <Aviso mensagem={erro} /><Botao titulo="Salvar horário" onPress={salvar} />
  </Painel></Pagina>;
}
