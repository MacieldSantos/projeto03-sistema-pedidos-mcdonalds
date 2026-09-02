# Projeto 03 - Sistema de Pedidos McDonald's

Projeto desenvolvido para a disciplina de **Técnicas de Programação II**, utilizando o padrão de projeto **GoF Criacional - Prototype**.

## Sobre o Projeto

O projeto simula um sistema simplificado de pedidos do McDonald's utilizando McOfertas previamente cadastradas como protótipos.

Cada pedido personalizado é criado através da clonagem de uma McOferta existente. Após a clonagem, o pedido pode receber um número próprio e ter os tamanhos da batata e do refrigerante modificados sem alterar a McOferta original.

## Padrão Prototype

O padrão **Prototype** permite criar novos objetos a partir da cópia de objetos existentes.

Neste projeto, cada objeto `McOferta` funciona como um protótipo.

O método:

```javascript
clone()
```

cria e retorna uma nova instância de `McOferta` contendo os mesmos dados do objeto original.

Dessa forma, o pedido clonado pode ser modificado independentemente do protótipo original.

## Classes

### McOferta

Representa uma McOferta e possui os atributos:

- `numeroPedido`
- `numero`
- `lanche`
- `batataTamanho`
- `refrigeranteTamanho`

Também possui o método:

```javascript
clone()
```

responsável pela criação de uma cópia da oferta.

### GerenciaMcOferta

Responsável por armazenar e gerenciar os protótipos das McOfertas.

Permite:

- cadastrar McOfertas;
- armazenar ofertas pelo número;
- localizar uma oferta;
- retornar uma cópia utilizando `clone()`.

## McOfertas Cadastradas

| Nº | Lanche | Batata | Refrigerante |
| --- | --- | --- | --- |
| 1 | Big Mac | Média | Médio |
| 2 | Quarteirão com Queijo | Média | Médio |
| 3 | McChicken | Média | Médio |
| 4 | Cheddar McMelt | Média | Médio |
| 5 | Quarteirão Duplo com Queijo | Média | Médio |

Todas as McOfertas originais possuem `numeroPedido` igual a `0`, pois funcionam apenas como protótipos.

## Pedidos Personalizados

O programa cria três pedidos a partir da clonagem das McOfertas cadastradas.

Os objetos clonados recebem um novo número de pedido e podem ter os tamanhos de batata e refrigerante modificados.

As alterações realizadas nos clones não modificam os protótipos originais.

## Tecnologias Utilizadas

- JavaScript
- Node.js
- Git
- GitHub
- Padrões de Projeto GoF
- Prototype

## Como Executar

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd Projeto03-SistemaPedidosMcDonalds
```

Execute:

```bash
node sistemaPedidos.js
```

Os resultados serão apresentados no terminal.

## Estrutura

```text
Projeto03-SistemaPedidosMcDonalds/
├── sistemaPedidos.js
└── README.md
```

## Informações Acadêmicas

**Instituição:** FATEC Luigi Papaiz  
**Curso:** Desenvolvimento de Software Multiplataforma  
**Semestre:** 3º semestre  
**Disciplina:** Técnicas de Programação II  
**Professor:** Vinícius Heltai Pacheco  
**Padrão de Projeto:** GoF Criacional - Prototype  
**Ano:** 2026

---

Projeto acadêmico desenvolvido para aplicação prática do padrão de projeto **Prototype**.