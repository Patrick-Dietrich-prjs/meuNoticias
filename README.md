# MeuNotícias - v0.1.0

Aplicação frontend para consumir notícias da CNN Brasil de forma personalizada.  
Permite filtrar por categorias, buscar notícias e ler o conteúdo completo das matérias.

## Stack

| Camada            | Tecnologia              |
| ----------------- | ----------------------- |
| Frontend          | React + Vite            |
| Roteamento        | React Router DOM        |
| HTTP Client       | Axios                   |
| API               | CNN Brasil (WordPress REST) |
| Estilização       | CSS puro + variáveis CSS |

## Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/Patrick-Dietrich-prjs/meuNoticias
cd MeuNoticias

# 2. Instale as dependências
npm install

# 3. Rode o projeto
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## Estrutura de pastas

```
src/
├── components/
│   └── NoticiaCard.jsx       → Card de notícia na listagem
├── pages/
│   ├── PaginaMainNoticias.jsx → Página inicial (listagem + filtros)
│   └── PaginaNoticia.jsx      → Página de leitura da matéria
├── services/
│   ├── api.js                 → Instância do Axios (baseURL da CNN)
│   └── NoticiaService.js      → Funções de busca de notícias
├── App.jsx                    → Configuração de rotas
├── App.css                    → Estilos dos componentes
├── index.css                  → Variáveis de tema e estilos globais
└── main.jsx                   → Ponto de entrada
```

## Funcionalidades

- Listagem de notícias da CNN Brasil
- Filtro por categorias (Política, Economia, Nacional, Internacional, Tecnologia)
- Busca por termo
- Página de leitura com o conteúdo completo da matéria
- Layout responsivo
- Suporte a tema claro e escuro (via `prefers-color-scheme`)

## API utilizada

A aplicação consome a API interna da CNN Brasil:

| Método | Endpoint                                              | Descrição                    |
| ------ | ----------------------------------------------------- | ---------------------------- |
| GET    | `/wp-json/content/v1/posts`                           | Lista notícias               |
| GET    | `/wp-json/content/v1/posts/{slug}`                    | Busca notícia pelo slug      |

### Parâmetros disponíveis na listagem

| Parâmetro   | Tipo    | Descrição                          |
| ----------- | ------- | ---------------------------------- |
| `per_page`  | number  | Quantidade de notícias por página  |
| `page`      | number  | Número da página                   |
| `category`  | string  | Slug da categoria                  |
| `search`    | string  | Termo de busca                     |

**Base URL:**  
`https://admin.cnnbrasil.com.br/wp-json/content/v1`

> **Observação:** Esta é uma API interna da CNN Brasil (não oficial). Ela pode sofrer alterações ou ser bloqueada a qualquer momento.

## Rotas do frontend

| Rota              | Página               | Descrição                              |
| ----------------- | -------------------- | -------------------------------------- |
| `/`               | `PaginaMainNoticias` | Listagem de notícias + filtros + busca |
| `/noticia/:slug`  | `PaginaNoticia`      | Leitura completa da matéria            |

## Fluxo da aplicação

1. O usuário acessa a página inicial e visualiza as últimas notícias
2. Pode filtrar por categoria ou realizar uma busca
3. Ao clicar em um card, é redirecionado para `/noticia/{slug}`
4. Na página da matéria, visualiza o conteúdo completo
5. O botão "Voltar" retorna à listagem

## Observações importantes

- O conteúdo das matérias é protegido por direitos autorais da CNN Brasil
- Este projeto é destinado a **uso pessoal / estudo**
- Não é recomendado publicar uma versão pública redistribuindo o conteúdo completo sem autorização

## Status do projeto

Versão inicial — Concluída  
Funcionalidades de listagem, filtros, busca e leitura de matérias funcionando.
```
