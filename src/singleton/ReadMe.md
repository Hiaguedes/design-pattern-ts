# Singleton

## Problema a ser resolvido

- Desperdicio de recurso
- Inconsistencias de estado
- Concorrencia descontrolada
- Complexidade desnecessaria

## Solucao 

O singleton garante que uma classe tenha apenas uma unica instancia e fornece um ponto global de acesso a instancia

- Tornar o construtor da classe privado, impedindo que novas instancias sejam criadas externamente
- Criar um metodo publico estatico que retorna a unica instancia da classe
- Garantir que essa instancia seja inicializada apenas uma vez durante toda a execucao do programa

## Exemplos de uso

- Gerenciamento de conexoes com bancos de dados
- Servicos de logging
- Cache compartilhado
- Configuracoes globais da aplicacao
- Manipulacao de filas de mensagens

## Pontos negativos

- Ela quebra o principio da responsabilidade unica, pois tenho duas responsabilidades dentro dela, a regra de negocio do componente (no caso do cache o get, set, has, ...) e a criacao da instancia, se precisar mudar ambas eu quebro todas as classes que a implementam

- Por eu estar criando e usando apenas uma instancia do mesmo objeto em toda a aplicacao eu crio um problema pra testar esse componente de maneira individual, deixa mais dificil. Ele quebra requisitos basicos do solid por conta do instanciamento unico
