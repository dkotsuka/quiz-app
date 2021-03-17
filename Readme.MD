# Quiz App
Este projeto é de um aplicativo mobile de perguntas e respostas múltiplas escolhas.

## Features
O aplicativo conta com perguntas que variam nos níveis: fácil, médio e difícil e são categorizadas por áreas de conhecimento.

Uma sessão completa do quiz conta com 10 perguntas de uma categoria escolhida pelo jogador.

Acertando duas perguntas seguidas o quiz aumenta o nível da próxima pergunta, até que esteja no nível difícil.

Errando duas perguntas consecutivas o nível cai até que esteja no nível fácil.

Ao final os erros e acertos são contabilizados por nível de dificuldade.

## Sistemas suportados (Versão mínima)
Android => 4.1 - Jelly Bean (API 16)

iOS => iOS 10

## Bibliotecas utilizadas

O projeto foi desenvolvido utilizando a versão **0.63** do framework **React Native**. Além dele e de outras bibliotecas inerentes ao ambiente deste framework, utilizei as seguintes libraries:

**axios (0.21.1):** toolset para requisições HTTP;

**html-entities (2.1.0):** ferramenta de decodificação de caracteres especiais em strings de HTML.

**react-native-dash (0.0.11):** componente de interface utilizado para exibir bordas pontilhadas.

**react-native-dotenv (2.5.3):** ferramenta para facilitar o uso de arquivos de configuração de variáveis de ambiente.

**react-navigation (5.9.3):** biblioteca de gerenciamento de navegação entre telas.

**styled-components (5.2.1:** biblioteca de estilização de componentes.

## Como rodar a aplicação em ambiente de desenvolvimento
- clonar este repositório;
- criar um arquivo `.env` na raíz do projeto e adicionar as variáveis:

    `API_URL=https://opentdb.com/api.php?`
    `API_CATEGORY_URL=https://opentdb.com/api_category.php`
    `API_TOKEN_URL=https://opentdb.com/api_token.php?`
- instalar dependências: em um terminal, rodar o comando `npm install` ou `yarn install` na raíz do projeto;
- realizar o build em Android:
    - inicializar o emulador de Android, ou ter um device conectado com o modo Desenvolvedor habilitado;
    - executar o comando `npm run android` ou `yarn android` na raíz do projeto.
- realizar o build em iOS:
    - executar o comando `npm run ios` ou `yarn ios` na raíz do projeto.

## Executando testes unitários e testes de UI
- na raíz do projeto executar: `npm run test` ou `yarn test`

## Considerações finais
Este projeto utiliza a API [opentdb](https://opentdb.com) para gerar as perguntas e respostas e todo o conteúdo do aplicativo está em inglês. O projeto foi contruído como parte do processo de seleção da SAS Plataforma de Educação.