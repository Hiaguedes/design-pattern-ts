# Abstract Factory

## Problema a ser resolvido

A criacao de familias de objetos relacionados ou dependentes pode apresentar varios desafios:

- Necessidade de garantir compatibilidade entre objetos relacionados
- Dificuldade em manter consistencia entre familias de produtos (entenda produto como o resultado final desses objetos)
- Forte acoplamento entre o codigo cliente e as classes concretas
- Complexidade ao trocar toda uma familia de objetos

## Solucao

O abstract factory fornece uma interface para criar familias de objetos relacionados sem especificar suas classes concretas

- Criar uma interface abstrata para fabricar produtos relacionados
- Implementar fabricas concretas para cada familia de produtos 
- Garantir que os produtos criados sejam compativeis entre si

## Exemplo de uso

- Sistema de entregas: sedex (rastreamento + prazo + preco) vs pac (rastreamento + prazo + preco), porem a data de entrega, a taxa sao diferentes 
- Sistema de Vendas: familia nacional (nfe + boleto + entrega) vs familia internacional (invoice + wire transfer + shipping)
- Sistema de reservas: familia pacote nacional (voo domestico + hotel brasil + transfer local) vs familia pacote internacional (voo internacional + hotel exterior + seguro viagem)
