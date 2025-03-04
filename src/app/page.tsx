'use client';
import { useState } from 'react';
import Input from '@/components/Input';
import Image from 'next/image';

export default function Home() {
  // Estado para armazenar os dados do formulário (email e senha)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Estado para armazenar mensagens de erro (email e senha)
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // Função chamada ao enviar o formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página

    // Validação simples dos campos
    const newErrors = { ...errors };
    if (!formData.email) newErrors.email = 'Email é obrigatório'; // Verifica se o email está vazio
    if (!formData.password) newErrors.password = 'Senha é obrigatória'; // Verifica se a senha está vazia
    setErrors(newErrors); // Atualiza o estado de erros

    // Se não houver erros, prossegue com o envio do formulário
    if (Object.values(newErrors).every((error) => !error)) {
      console.log('Formulário enviado:', formData); // Simula o envio do formulário
    }
  };

  // Função chamada quando o valor de um input muda
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target; // Obtém o ID e o valor do input que foi alterado
    setFormData((prev) => ({ ...prev, [id]: value })); // Atualiza o estado com o novo valor
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Coluna da esquerda: Imagem de fundo */}
      <div className="relative w-full h-full bg-black">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/Login.png" // Caminho da imagem de fundo
          alt="Login" // Texto alternativo para acessibilidade
          layout="fill" // Faz a imagem cobrir todo o espaço disponível
          priority // Prioriza o carregamento da imagem
        />
      </div>

      {/* Coluna da direita: Formulário de login */}
      <div className="flex flex-col h-full w-full justify-center items-center relative">
        <div className="p-6 rounded-lg w-full max-w-md">
          {/* Título do sistema */}
          <h2 className="font-nunito text-lg text-black">ERP System</h2>

          {/* Mensagem de boas-vindas */}
          <div className="mt-4 text-left">
            <p className="mt-20 text-lg font-nunito">Bem-vindo!</p>
            <h1 className="mt-4 text-5xl font-bold">Faça seu login</h1>
          </div>

          {/* Formulário de login */}
          <div className="w-full mt-20">
            {/* Input de email */}
            <Input
              id="email" // ID do input (deve corresponder à chave no estado formData)
              label="Email" // Rótulo do input
              type="email" // Tipo do input (email)
              placeholder="Digite seu email" // Placeholder do input
              value={formData.email} // Valor do input (controlado pelo estado formData)
              onChange={handleChange} // Função chamada quando o valor do input muda
              error={errors.email} // Mensagem de erro (se houver)
              required // Define o input como obrigatório
            />

            {/* Input de senha */}
            <Input
              id="password" // ID do input (deve corresponder à chave no estado formData)
              label="Senha" // Rótulo do input
              type="password" // Tipo do input (password)
              placeholder="Digite sua senha" // Placeholder do input
              value={formData.password} // Valor do input (controlado pelo estado formData)
              onChange={handleChange} // Função chamada quando o valor do input muda
              error={errors.password} // Mensagem de erro (se houver)
              required // Define o input como obrigatório
            />
          </div>

          {/* Checkbox "Lembrar-me" e link "Esqueci minha senha" */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input type="checkbox" id="lembrar" className="mr-2 w-4 h-4" />
              <label htmlFor="lembrar" className="text-lg font-nunito text-black">
                Lembrar-me
              </label>
            </div>
            <a
              href="#"
              className="text-lg font-nunito"
              style={{
                backgroundImage: 'linear-gradient(135deg, #14ADD6 0%, #384295 100%)', // Gradiente no texto
                WebkitBackgroundClip: 'text', // Aplica o gradiente apenas ao texto
                color: 'transparent', // Torna o texto transparente para exibir o gradiente
              }}
            >
              Esqueci minha senha
            </a>
          </div>

          {/* Link para cadastro */}
          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-[15px] font-nunito"
              style={{
                backgroundImage: 'linear-gradient(135deg, #14ADD6 0%, #384295 100%)', // Gradiente no texto
                WebkitBackgroundClip: 'text', // Aplica o gradiente apenas ao texto
                color: 'transparent', // Torna o texto transparente para exibir o gradiente
              }}
            >
              Não tem cadastro? Fale agora com nossos especialistas.
            </a>
          </div>

          {/* Botão de login */}
          <div className="mt-6">
            <button
              className="w-full cursor-pointer p-4 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white rounded-2xl border hover:bg-white hover:border-[#14ADD6] hover:text-transparent hover:bg-clip-text hover:from-[#14ADD6] hover:to-[#384295] transition-all duration-300 ease-in-out"
              onClick={handleSubmit} // Função chamada ao clicar no botão
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}