# Barbearia Agenda — Entrega 1

Aplicativo mobile para organizar agendamentos de uma barbearia. Primeira versão navegável em React Native com Expo e React Navigation (Native Stack), em JavaScript.

## Problema, contexto e público

Barbearias que organizam atendimentos por mensagens ou anotações podem ter dificuldade para informar vagas, evitar conflitos de horário e identificar os clientes de cada atendimento. O cliente precisa consultar disponibilidade e combinar um horário; o responsável precisa manter uma agenda clara. Este é o problema escolhido para o projeto, sem alegar pesquisa de campo já realizada.

Público: clientes da barbearia e seu responsável administrativo. A solução pretende reduzir a troca repetitiva de mensagens e centralizar as informações da agenda.

## Proposta de solução e justificativa

O Barbearia Agenda oferece um fluxo para o cliente consultar vagas, marcar um corte e acompanhar seus agendamentos. O administrador abre horários e consulta o cliente marcado em cada um. A agenda compartilhada é a entidade principal; não há catálogo de produtos nem compra de mercadorias.

Nesta primeira versão, considera-se uma barbearia com um barbeiro, um serviço (corte de cabelo) e atendimentos de uma hora. Múltiplos profissionais, pagamentos e notificações ficam fora do projeto inicial.

## Tipos de usuário e permissões previstas

| Perfil | Permissões |
| --- | --- |
| Cliente | Consultar horários disponíveis, agendar, ver e cancelar seus próprios agendamentos. |
| Administrador | Criar horários disponíveis e consultar todos os horários, com o cliente de cada reserva. Nas próximas etapas, editar e remover horários livres e gerenciar a agenda. |

Na entrega 1, a seleção do perfil é demonstrativa, sem senha e sem autenticação. Ela não representa proteção de dados. Nas próximas etapas o servidor validará o usuário e suas permissões por JWT; o cadastro público não poderá criar administradores.

## Funcionalidades desta entrega

- Entrada demonstrativa com dois perfis.
- Lista de horários disponíveis em ordem de data/hora.
- Reserva local e consulta dos agendamentos do cliente demonstrativo.
- Cancelamento local, liberando novamente a vaga.
- Painel administrativo com horários livres e nomes dos clientes agendados.
- Criação de horários com validação de data, hora futura e duplicidade.
- Saída do perfil e retorno à tela inicial.

Os dados são fictícios e ficam somente na memória do aplicativo. Trocar de perfil mantém os dados durante a sessão; recarregar reinicia a demonstração. Nenhum agendamento é enviado a uma barbearia real. O protótipo usa um cliente demonstrativo; identificação por ID e concorrência de reservas serão tratadas no backend.

## Telas e fluxo inicial

1. **Login**: apresentação e acesso demonstrativo como cliente ou administrador.
2. **Horários**: vagas e ação de agendar.
3. **Meus agendamentos**: reservas do cliente e cancelamento.
4. **Painel administrativo**: disponibilidade e clientes por horário.
5. **Criar horário**: formulário para abrir uma vaga.

```text
Login
  ├── Cliente → Horários → Meus agendamentos
  │                ↑              │
  │                └── Voltar ────┘
  └── Administrador → Painel administrativo → Criar horário
                              ↑                    │
                              └── Salvar / Voltar ─┘
Sair de qualquer perfil → Login
```

Telas futuras: cadastro de cliente, login real, edição de horário e gestão de agendamentos. A tela de login atual será conectada à API na etapa de autenticação.

## Identidade inicial

Nome: **Barbearia Agenda**. Interface em português, fundo claro, verde escuro para ações, tipografia legível e botões com área de toque mínima de 48 pontos. A disponibilidade e o nome do cliente têm prioridade sobre elementos decorativos. Os componentes visuais básicos foram reaproveitados do material de aula.

## Como executar

Pré-requisito: Node.js compatível com Expo SDK 58 (22.13 ou superior). Use as versões registradas no lockfile.

```bash
npm ci
npm start
```

Para navegador:

```bash
npm run web
```

Para Android, abra com uma versão do Expo Go compatível com o SDK 58, ou use um development build compatível. O computador e o aparelho precisam conseguir se comunicar. Não é necessário configurar API, MySQL, arquivo .env ou senha para esta entrega.

## Estrutura

```text
App.js                   Navegação e estado demonstrativo
index.js                 Entrada Expo
app.json                 Nome e configuração
screens/                 Cinco telas
components/ui.js         Componentes visuais reutilizáveis
data/horarios.js          Dados fictícios e formatação
README.md                Proposta, escopo e execução
VALIDACAO.md             Verificações e roteiro manual
package.json             Dependências e comandos
package-lock.json        Instalação reproduzível
```

## Evolução prevista

- **Entrega 1:** proposta, perfis, permissões previstas, cinco telas e navegação.
- **Entrega 2:** API Express, MySQL, entidades usuários/horários/agendamentos e integração por fetch. Reserva deve ser atômica para impedir dois clientes no mesmo horário.
- **Entrega 3:** cadastro, hash, login, JWT/Bearer Token, autorização no backend e CRUD completo. Cliente acessa somente seus agendamentos; administrador gerencia a agenda.
- **Entrega 4:** revisão, testes integrados, documentação final, APK e apresentação.

## Publicar a entrega no repositório

Extraia o ZIP e coloque **os arquivos do projeto**, incluindo arquivos ocultos como `.gitignore`, na raiz do repositório. Não publique somente o ZIP. Não envie node_modules, .expo, dist ou credenciais.

Se o repositório já estiver clonado, copie os arquivos para ele e execute:

```bash
git add .
git commit -m "Entrega 1: proposta e prototipo navegavel da barbearia"
git push
```

Para um repositório novo, crie-o na plataforma, clone-o e siga os passos acima. Confira na página remota se o README e os fontes estão presentes. A criação do repositório, o commit e o push ficam a cargo do aluno; não foram executados na preparação deste ZIP. Faça novos commits conforme o desenvolvimento real avançar.

## Referências e origem

A configuração Expo/React Native, o ponto de entrada, os componentes visuais e ferramentas partem do ZIP didático `loja-jwt.zip`. Os fluxos de agenda, telas e proposta foram adaptados para o tema solicitado, com regras próprias de disponibilidade e reservas. A licença do material-base foi preservada em LICENSE.

- Enunciado: Projeto Avaliativo Aplicacao Mobile JWT.pdf, seção 5 (Entrega 1).
- Expo SDK 58: https://docs.expo.dev/versions/v58.0.0/
- React Navigation: https://reactnavigation.org/docs/native-stack-navigator/
