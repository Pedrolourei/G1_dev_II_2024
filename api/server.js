require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Simulação de banco de dados de usuários
const users = [];

// Middleware para proteger rotas com JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Token não encontrado!' });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido!' });
    req.user = user;
    next();
  });
}

// Rota de login
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  // Verificar se o usuário existe
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(400).json({ error: 'Usuário não encontrado!' });
  }

  // Verificar a senha
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ error: 'Senha incorreta!' });
  }

  // Gerar token JWT
  const token = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
});

// Rota de registro
app.post('/auth/signup', async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password)

  // Verificar se o usuário já existe
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'Usuário já existe!' });
  }

  // Criptografar a senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Criar o usuário e adicionar à lista simulada
  const user = { email, password: hashedPassword };
  users.push(user);

  res.status(201).json({ message: 'Usuário registrado com sucesso!' });
});

// Rota protegida (exemplo)
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Esta é uma rota protegida!', user: req.user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
