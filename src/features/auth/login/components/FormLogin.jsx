import React, { useState } from 'react';
import InputBase from '../../shared/InputBase';
import ButtonSend from '../../shared/ButtonSend';

export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação fictícia só pra exemplo
    const newErrors = {};
    if (!form.email.includes('@')) newErrors.email = 'Email inválido';
    if (form.password.length < 6) newErrors.password = 'Mínimo 6 caracteres';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Email:', form.email);
      console.log('Senha:', form.password);
      // Lógica de login aqui
    }
  };

  return (
    <form onSubmit={handleSubmit} className="gap-[24px] flex flex-col">
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

      <ButtonSend
      children='Entrar'
      ariaLabel='Botão para fazer o login'
      />
      
    </form>
  );
}
