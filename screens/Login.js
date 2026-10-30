import { Text } from 'react-native';
import { Pagina, Painel, Botao, estilos } from '../components/ui.js';
export default function Login({ entrar }) {
  return <Pagina><Painel>
    <Text style={estilos.titulo}>Seu próximo corte, com hora marcada.</Text>
    <Text style={estilos.subtitulo}>Consulte a agenda da barbearia e escolha o melhor horário para você.</Text>
    <Text style={estilos.texto}>Protótipo da entrega 1. Escolha um perfil para conhecer o aplicativo. O login com e-mail e senha será implementado na etapa de autenticação.</Text>
    <Botao titulo="Entrar como cliente (demo)" onPress={function cliente() { entrar({ nome: 'Cliente demonstração', nivel: 'cliente' }); }} />
    <Botao titulo="Entrar como administrador (demo)" variante="secundario" onPress={function admin() { entrar({ nome: 'Administrador demonstração', nivel: 'admin' }); }} />
    <Text style={estilos.subtitulo}>Agendamentos demonstrativos, sem envio à barbearia. Os dados são reiniciados ao recarregar o aplicativo.</Text>
  </Painel></Pagina>;
}
