# Validação — Entrega 1

Verificações realizadas em 29/10/2026:

- Instalação das dependências concluída e lockfile atualizado.
- `npm run lint`: passou.
- `npm run typecheck`: passou.
- `npm run export:web`: passou.
- Navegador Microsoft Edge, viewport de 390 × 844: entrada de cliente, reserva às 09:00, consulta e cancelamento; retorno da vaga à lista; saída e entrada de administrador; exibição do nome do cliente às 10:00; rejeição de horário duplicado; criação às 16:00 e disponibilidade no perfil cliente. Todos passaram, sem erros JavaScript capturados.
- Inspeção visual da tela de entrada em viewport mobile e da lista em 1280 × 800, sem corte de texto observado.

Não foi testado em aparelho Android/iOS físico. Não há API, banco de dados ou autenticação real nesta entrega. O teste web valida o protótipo local, não concorrência entre aparelhos nem segurança de autenticação. APK pertence à entrega final.

## Repetir o roteiro manual

1. Execute `npm ci` e `npm run web`.
2. Entre como cliente e reserve 09:00.
3. Abra Meus agendamentos; confirme 09:00 e a reserva fictícia inicial de 10:00.
4. Cancele 09:00 e volte: a vaga deve estar disponível.
5. Saia, entre como administrador e confira o cliente das 10:00.
6. Abra Criar horário e tente a mesma data às 09:00: deve informar duplicidade.
7. Crie uma vaga futura às 16:00: deve aparecer no painel.
8. Saia, entre como cliente e confirme a nova vaga.
9. Recarregue: os dados demonstrativos iniciais serão restaurados.

## Repositório

Commit, push e conferência do repositório remoto ainda devem ser feitos pelo aluno. A preparação do ZIP não cria histórico Git nem publica a entrega.
