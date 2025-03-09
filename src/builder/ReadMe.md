# Builder

## Problema a ser resolvido

- Construtores com muitos parametros
- Ordem obrigatoria de inicializacao
- Configuracoes parciais impossiveis
- Codigo pouco legivel e propenso a erros

## Solucao 

O builder permite construir objetos complexos passo a passo, separando o processo de construcao da representacao final

- Criar uma classe builder separada que encapsula a logica de construcao
- Permitir a configuracao de diferentes caracteristicas de forma independente
- Possibilitar a criacao do objeto final apenas qando estiver completamente configurado


## Exemplos de uso

- Montagem de objetos de configuracao complexa
- Permitir a criacao do objeto final apenas quando estiver completamente configurado 

## Pontos negativos

- Montagem de objetos de configuracao complexa 
- Criacao de objetos imutaveis com muitos campos opcionais
- Montagem de queries SQL complexas 

