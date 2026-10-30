# TechForge

Landing page e área do estudante do **TechForge**, um app conceito que usa a câmera do celular e IA para transformar fotos de lousa, slides e documentos em material de estudo. Projeto da Sprint 4 (Front-end Design + Web Development), evolução da landing da Sprint 3.

- **Deploy (Vercel):** https://sprint-4-web-front-1espq.vercel.app/
- **Repositório:** https://github.com/TheMathh/sprint-4-web-front-1espq

## Tecnologias

- React 19 + Vite
- React Router (rotas públicas e privada)
- Tailwind CSS
- MockAPI com dados gerados pelo Faker.js
- ESLint

## Como instalar as dependências

Requer Node.js 20 ou superior.

```bash
git clone [https://github.com/TheMathh/sprint-4-web-front-1espq]
cd sprint-4-web-front-1espq
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Abra `http://localhost:5173`. Para gerar a versão de produção: `npm run build`.

## Back-end

O projeto não tem servidor próprio. Os dados vêm de uma API mockada hospedada no MockAPI (`src/services/api.js`), que não exige nenhuma configuração local.

## Usuário e senha para teste

| Usuário | Senha |
|---|---|
| aluno | techforge123 |

O login é apenas demonstrativo: a verificação é feita no código, sem back-end. Ele libera a rota privada `/app` (Área do estudante), que lista os resumos vindos da API.

## Rotas

| Rota | Tipo | Descrição |
|---|---|---|
| `/` | Pública | Landing page |
| `/login` | Pública | Tela de login |
| `/app` | Privada | Área do estudante (redireciona para `/login` se não estiver logado) |

## Estrutura

- `src/components`: componentes da landing e da área do estudante
- `src/pages`: Home, Login e Area
- `src/context`: AuthContext e AuthProvider
- `src/hooks`: hooks customizados `useAuth` e `useResumos`
- `src/data`: conteúdos exibidos nos cards
- `src/services`: endereço da API

## Uso de Inteligência Artificial

Utilizamos o Claude (Anthropic) como ferramenta de apoio durante o desenvolvimento do projeto. A ferramenta foi utilizada para auxiliar no planejamento da migração da landing page de HTML/CSS para React, divisão de tarefas, na conversão de estilos para Tailwind CSS, na estruturação e na elaboração do README. A equipe realizou adaptações e testes no projeto, sendo responsável pelas decisões de implementação, identidade visual, textos e solução proposta para o Challenge.

## Equipe

Mateus A. Borges, Arthur de Sá, Gustavo Bidin e Isadora Bradac.