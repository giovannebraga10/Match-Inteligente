
## Funcionalidades Implementadas

A aplicação conta com as seguintes funcionalidades:

- **Formulário de Busca**: 3 campos para preencher com **Nome**, **Área de Interesse** e **Localização**.
- **Botão “Buscar Conexões”**: Ao clicar no botão, a aplicação simula a busca de conexões baseadas nos dados inseridos no formulário.
- **Exibição de Resultados**: Exibição de até 3 resultados com **Nome**, **Área de Interesse** e **Nível de Afinidade** (ex: 78%).
- **Interação com os Resultados**: Botões para **Descartar** ou **Conectar** com os resultados simulados.
- **Notificação de Conexão**: Após clicar em "Conectar", o usuário recebe uma notificação de "Solicitação Enviada".
  
## Decisões Tomadas

- **Tecnologia Utilizada**: A aplicação foi desenvolvida utilizando **React** para garantir uma interface dinâmica e responsiva.
- **Organização do Código**: O código foi estruturado de forma modular, com componentes reutilizáveis para garantir escalabilidade e manutenção facilitada.
- **Responsividade**: A interface foi construída para ser totalmente responsiva, adaptando-se tanto para desktop quanto para dispositivos móveis.
- **Simulação de Afinidade**: A afinidade é calculada de forma simples, utilizando um valor fixo, para simular a lógica de matchmaking.

## Melhorias futuras
- **Implementação do backend**:  Decidi não incluir o backend para manter as caracteristicas e não perder a simplicidade do MVP, garantindo uma solução mais enxuta e focada em uma mais entrega rápida. 
- **Implementação de uma IA Real**: Com mais tempo, eu implementaria uma inteligência artificial real para calcular a afinidade entre os usuários, baseando-se em suas preferências e histórico de interações.
- **Persistência de Dados**: Adicionaria um backend simples para armazenar os dados dos usuários e suas conexões, permitindo que a aplicação fosse mais dinâmica e persistente.
- **Melhoria na Interface (UI/UX)**: Investiria mais tempo aprimorando o design da interface, incluindo animações e transições mais sofisticadas para melhorar a experiência do usuário.

## Instruções para Rodar o Projeto

### Requisitos

- **Node.js** (versão recomendada: 14.x ou superior)

### Passos

1. Clone este repositório para sua máquina local:
   ```bash
   git clone https://github.com/giovannebraga10/Match-Inteligente.git
   
2. Navegue até a pasta do projeto e execute o comando NPM
   ```bash
   npm install

2. Inicie o projeto
   ```bash
   npm start
