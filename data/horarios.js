// Dados fictícios. A data inicial acompanha o dia seguinte à execução.
const amanha = new Date();
amanha.setDate(amanha.getDate() + 1);
export const dataInicial = [amanha.getFullYear(), String(amanha.getMonth() + 1).padStart(2, '0'), String(amanha.getDate()).padStart(2, '0')].join('-');
export function formatarData(data) { return data.split('-').reverse().join('/'); }
export const horariosIniciais = [
  { id: '1', data: dataInicial, hora: '09:00', cliente: null },
  { id: '2', data: dataInicial, hora: '10:00', cliente: 'Cliente demonstração' },
  { id: '3', data: dataInicial, hora: '11:00', cliente: null },
  { id: '4', data: dataInicial, hora: '14:00', cliente: null },
];
export function ordenar(horarios) { return [...horarios].sort(function comparar(a, b) { return (a.data + a.hora).localeCompare(b.data + b.hora); }); }
