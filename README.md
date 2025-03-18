# API de Pedidos

## Descrição

API para gerenciamento de pedidos utilizando **Express.js** e **MongoDB**. Permite criar, listar, atualizar e deletar pedidos.

## Funcionalidades

- Criar pedido
- Listar pedidos
- Buscar pedido por ID
- Atualizar pedido
- Deletar pedido

## Modelo de Pedido

```json
{
  "nome": "João",
  "sobrenome": "Silva",
  "endereco": "Rua X, 123",
  "cpf": "000.000.000-00",
  "pagamento": {
    "tipo": "pix",
    "status": "pago",
    "detalhes": "detalhes da transação"
  },
  "status": "em preparação",
  "itens": [
    {
      "nomeProduto": "Pizza",
      "quantidade": 2,
      "preco": 54
    },
    {
      "nomeProduto": "Refri",
      "quantidade": 2,
      "preco": 20
    }
  ]
}
```

## Endpoints

### 1. Criar Pedido

- **Método**: `POST`
- **URL**: `/api/pedidos`

### 2. Listar Pedidos

- **Método**: `GET`
- **URL**: `/api/pedidos`

### 3. Buscar Pedido por ID

- **Método**: `GET`
- **URL**: `/api/pedidos/:id`

### 4. Atualizar Pedido

- **Método**: `PUT`
- **URL**: `/api/pedidos/:id`

### 5. Deletar Pedido

- **Método**: `DELETE`
- **URL**: `/api/pedidos/:id`

## Como Rodar

1. Clone o repositório
   ```bash
   https://github.com/RobsonPMartins/OrderAPI.git
   ```

2. Instale as dependências
   ```bash
   npm install
   ```

3. Rodar a API
   ```bash
   npm start
   ```

   A API estará disponível em: `http://localhost:3000`
