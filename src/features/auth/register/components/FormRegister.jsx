import React, { useState } from 'react';
import InputBase from '../../shared/InputBase';
import ButtonSend from '../../shared/ButtonSend';

export default function LoginForm() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    cpfOrCnpj: '',
    nome: '',
    wantWork: true,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const finalValue = type === 'checkbox' ? checked : value;

    setForm((prev) => ({ ...prev, [name]: finalValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.email.includes('@')) newErrors.email = 'Email inválido';
    if (form.password.length < 6) newErrors.password = 'Mínimo 6 caracteres';
    if (!form.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!form.cpfOrCnpj.trim()) newErrors.cpfOrCnpj = 'CPF ou CNPJ obrigatório';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Formulário enviado:', form);
      // Coloque aqui sua lógica de envio
    }
  };

  return (
    <form onSubmit={handleSubmit} className="gap-[24px] flex flex-col">
      <InputBase
        label="Nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        placeholder="Seu nome completo"
        error={errors.nome}
      />

      <InputBase
        label="CPF ou CNPJ"
        type="text"
        name="cpfOrCnpj"
        value={form.cpfOrCnpj}
        onChange={handleChange}
        placeholder="000.000.000-00"
        error={errors.cpfOrCnpj}
      />

      <InputBase
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="seu@email.com"
        error={errors.email}
      />

      <InputBase
        label="Senha"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="********"
        error={errors.password}
      />

      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input
          type="checkbox"
          name="wantWork"
          checked={form.wantWork}
          onChange={handleChange}
          className="accent-black dark:accent-white"
        />
        Quero ser contratado(a)
      </label>

      <ButtonSend
        children="Entrar"
        ariaLabel="Botão para fazer o login"
      />
    </form>
  );
}
