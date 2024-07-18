# Pizza Day

## Descrição

Pizza Day é uma aplicação web que permite aos usuários fazerem pedidos de pizza de forma fácil e rápida. A aplicação oferece um formulário para preenchimento com informações do cliente e do pedido, que são então armazenadas em um banco de dados MySQL. A aplicação inclui funcionalidades como alternância de modo escuro e claro.

## Funcionalidades

- Formulário de pedido de pizza com campos para nome, telefone, endereço e sabor da pizza.
- Alternância de modo escuro e claro para melhorar a experiência do usuário.
- Armazenamento de dados do pedido e do cliente em um banco de dados MySQL.
- Validação de preenchimento de todos os campos do formulário.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- PHP
- MySQL

## Estrutura do Projeto

PizzaDay/
│ <br>
├── index.html<br>
├── scripts/<br>
│ └── main.js<br>
├── styles/<br>
│ └── style.css<br>
└── README.md<br>


## Como Executar o Projeto

### Pré-requisitos

- Servidor web com suporte a PHP (ex: Apache, Nginx)
- MySQL ou MariaDB
- Navegador web

### Configuração do Banco de Dados

1. Crie o banco de dados e as tabelas necessárias:
```sql
CREATE DATABASE pizzaDay;

USE pizzaDay;

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    sabor VARCHAR(50) NOT NULL
);

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco VARCHAR(255) NOT NULL
);
