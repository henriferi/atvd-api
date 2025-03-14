const express = require('express');
const app = express();
const port = 3000;

const produtos = [
  { id: 1, nome: 'Laptop', categoria: 'eletrônicos', preco: 1200 },
  { id: 2, nome: 'Camiseta', categoria: 'roupas', preco: 25 },
  { id: 3, nome: 'Livro', categoria: 'livros', preco: 15 },
];

const usuarios = [
  { id: 1, nome: 'João', email: 'joao@example.com' },
  { id: 2, nome: 'Maria', email: 'maria@example.com' },
];

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.get('/produtos/:id', (req, res) => {
  const produtoId = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === produtoId);

  if (produto) {
    res.json(produto);
  } else {
    res.status(404).send('Produto não encontrado');
  }
});

app.get('/usuarios', (req, res) => {
  res.json(usuarios); 
});

app.get('/usuarios/:id', (req, res) => {
  const usuarioId = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === usuarioId);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).send('Usuário não encontrado');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});