# CRUD de Usuários com React Native e Expo

Este projeto é um aplicativo simples em React Native utilizando Expo e TypeScript para realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) em uma lista de usuários. O backend é uma API REST que utiliza SQLite como banco de dados.

## Funcionalidades

- Cadastro de novos usuários
- Listagem de usuários em formato de cards
- Edição de informações de usuários
- Exclusão de usuários
- Visualização de detalhes de cada usuário

## Tecnologias Utilizadas

- **React Native**: Para construir a interface do usuário.
- **Expo**: Para simplificar o desenvolvimento e testes do aplicativo.
- **TypeScript**: Para adicionar tipagem estática ao código.
- **Axios**: Para realizar requisições HTTP à API.
- **SQLite**: Para o armazenamento de dados na API.

## Estrutura do Projeto

- `api/`: Contém a API REST com a configuração do banco de dados SQLite.
- `src/`: Contém o código do aplicativo React Native.
  - `components/`: Componentes reutilizáveis, como Header e Footer.
  - `screens/`: Telas do aplicativo, como Home, AddUser, EditUser e DetailsUser.
- `App.tsx`: Ponto de entrada do aplicativo, onde a navegação é configurada.

## Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado LTS)
- [Expo Go](https://expo.dev/client) (no seu dispositivo móvel)
- [SQLite](https://www.sqlite.org/index.html) (para rodar a API)

### Rodar a API

1. Navegue até a pasta `api`:
   ```bash
   cd api
