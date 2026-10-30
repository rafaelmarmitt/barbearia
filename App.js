import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Login from './screens/Login.js';
import Horarios from './screens/Horarios.js';
import MeusAgendamentos from './screens/MeusAgendamentos.js';
import PainelAdmin from './screens/PainelAdmin.js';
import CriarHorario from './screens/CriarHorario.js';
import { horariosIniciais } from './data/horarios.js';
import { cores } from './components/ui.js';
const Stack = createNativeStackNavigator();

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [horarios, setHorarios] = useState(horariosIniciais);
  function sair() { setUsuario(null); }
  function reservar(id) {
    setHorarios(function atualizar(lista) {
      return lista.map(function item(h) { return h.id === id && !h.cliente ? { ...h, cliente: usuario.nome } : h; });
    });
  }
  function cancelar(id) {
    setHorarios(function atualizar(lista) {
      return lista.map(function item(h) { return h.id === id && h.cliente === usuario.nome ? { ...h, cliente: null } : h; });
    });
  }
  function criar(dados) { setHorarios(function atualizar(lista) { return [...lista, { ...dados, id: String(Date.now()), cliente: null }]; }); }
  return <SafeAreaProvider><StatusBar style="dark" /><NavigationContainer>
    <Stack.Navigator id="Barbearia" screenOptions={{ headerStyle: { backgroundColor: cores.papel }, headerTintColor: cores.texto, contentStyle: { backgroundColor: cores.fundo } }}>
      {!usuario ? <Stack.Screen name="Login" options={{ title: 'Barbearia Agenda' }}>{function tela(props) { return <Login {...props} entrar={setUsuario} />; }}</Stack.Screen> :
        usuario.nivel === 'admin' ? <Stack.Group navigationKey="admin">
          <Stack.Screen name="PainelAdmin" options={{ title: 'Agenda da barbearia' }}>{function tela(props) { return <PainelAdmin {...props} horarios={horarios} sair={sair} />; }}</Stack.Screen>
          <Stack.Screen name="CriarHorario" options={{ title: 'Abrir horário' }}>{function tela(props) { return <CriarHorario {...props} horarios={horarios} criar={criar} />; }}</Stack.Screen>
        </Stack.Group> : <Stack.Group navigationKey="cliente">
          <Stack.Screen name="Horarios" options={{ title: 'Marcar horário' }}>{function tela(props) { return <Horarios {...props} horarios={horarios} usuario={usuario} reservar={reservar} sair={sair} />; }}</Stack.Screen>
          <Stack.Screen name="MeusAgendamentos" options={{ title: 'Meus agendamentos' }}>{function tela(props) { return <MeusAgendamentos {...props} horarios={horarios} usuario={usuario} cancelar={cancelar} />; }}</Stack.Screen>
        </Stack.Group>}
    </Stack.Navigator>
  </NavigationContainer></SafeAreaProvider>;
}
