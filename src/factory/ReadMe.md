# Factory

Factory Method e diferente do single method que simplifica e muito a criacao de novos objetos, aqui e a construcao completa

## Problema a ser resolvido

- Acoplamento forte entre classes
- Dificuldade para trocar implementacoes
- Codigo inflexivel
- Violacao do principio de responsabilidade unica

## Solucao 

O factory method define uma interface para criar objetos mas permite que as subclasses decidam quais classes instanciar

- Criar uma interface ou classe abstrata com metodo factory
- Permitier que subclasses implementem a logica especifica de criacao
- Desacoplar o codigo que usa o objeto do codigo que o cria

## Exemplos de uso

- Metodos de pagamento: Uma classe PaymentProcessor com factory method createPayment, onde CreditCardProcessor cria pagamentos com cartao e PixProcessor cria pagamentos com Pix
- Conexao de banco de dados: Uma classe DatabaseFactory com factory method createConnection(), onde MySQLFactory cria conexoes MySQL e PostgresFactory cria conexoes PostgresSQL
- Geracao de documentos: Uma classe DocumentFactory com factory method createDocument, onde as subclasses geram diferentes formators como pdf ou DOCX de forma simplificada

## Pontos negativos

- Pode ficar verboso certas implementacoes e repeticao de codigo, pois sempre precisa ter uma classe e uma factory e isso pode ficar complexo 

