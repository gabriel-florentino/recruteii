# 🧠 Recrutei — Plataforma de Recrutamento Reverso

**Recrutei** é uma plataforma de recrutamento reverso que centraliza talentos e facilita que empresas encontrem profissionais baseados em suas habilidades, portfólios e projetos. O foco é entregar autonomia para o candidato e eficiência para quem contrata.

---

## 🚀 Tecnologias

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Context API](https://react.dev/learn/scaling-up-with-reducer-and-context)
- [Node.js (em breve)](https://nodejs.org/)
- [MySQL (em breve)](https://www.mysql.com/)

---

## 📁 Estrutura de Pastas

src/<br/>
├── assets/ # Imagens e ícones<br/>
├── components/ # Componentes reutilizáveis<br/>
├── context/ # Contextos globais (ex: tema, menu)<br/>
├── features/<br/>
│ └── auth/<br/>
│ ├── login/<br/>
│ │ ├── componentes/<br/>
│ │ │ ├── Form.jsx<br/>
│ │ │ ├── ButtonGoogle.jsx<br/>
│ │ │ └── Shared.jsx<br/>
│ │ └── index.jsx<br/>
│ └── register/ # Em desenvolvimento<br/>
├── pages/ # Páginas da aplicação<br/>
├── routes/ # Definição das rotas<br/>
└── App.jsx<br/>

---

## 🧩 Funcionalidades (Login)

- Login com e-mail e senha
- Login com Google (em breve)
- Suporte a tema escuro (dark mode)
- Validação de campos
- Componentização reutilizável (`InputBase`, `ButtonGoogle`, etc)

---

## 📦 Instalação

```bash
# Clone o projeto
git clone https://github.com/seu-usuario/recrutei.git
cd recrutei

# Instale as dependências
npm install

# Rode a aplicação
npm run dev
