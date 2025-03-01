'use client'
'use client'
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Imagem à esquerda */}
      <div className="relative w-full h-full bg-black">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/Login.png"
          alt="Login"
          layout="fill"
          priority
        />
      </div>

      {/* Conteúdo à direita */}
      <div className="flex flex-col h-11/12 w-full justify-start items-center relative">
        <div className="p-6 rounded-lg w-full max-w-md">
          <h2 className="font-nunito text-lg text-black mt-16">ERP System</h2>
          {/* Textos em outra div separada */}
          <div className="mt-4 text-left">
            <p className="mt-20 text-lg font-nunito">Bem-vindo!</p>
            <h1 className="mt-4 text-5xl font-bold">Faça seu login</h1>
          </div>

          {/* Formulário de login */}
          <div className="w-full mt-20">
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-nunito text-black">Email</label>
              <input
                id="email"
                type="email"
                className="mt-2 w-full p-4 border-2 border-gray-300 rounded-2xl"
                placeholder="Digite seu email"
              />
            </div>

            <div className="mb-6 relative">
              <label htmlFor="senha" className="block text-lg font-nunito text-black w-full">Senha</label>
              <div className="relative">
                <input
                  id="senha"
                  type={showPassword ? "text" : "password"}
                  className="mt-2 w-full p-4 pr-12 border-2 border-gray-300 rounded-2xl"
                  placeholder="Digite sua senha"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={24} />
                  ) : (
                    <AiOutlineEye size={24} />
                  )}
                </button>
              </div>
            </div>

            {/* Checkbox e Esqueci minha senha */}
            <div className="flex items-center justify-between">
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
                  backgroundImage: "linear-gradient(135deg, #14ADD6 0%, #384295 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Esqueci minha senha
              </a>
            </div>

            {/* Novo link com gradiente e texto menor */}
            <div className="mt-4 text-center">
              <a
                href="#"
                className="text-[15px] font-nunito"
                style={{
                  backgroundImage: "linear-gradient(135deg, #14ADD6 0%, #384295 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Não tem cadastro? Fale agora com nossos especialistas.
              </a>
            </div>

            {/* Botão de login com gradiente usando Tailwind */}
            <div className="mt-6">
              <button className="w-full cursor-pointer p-4 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white rounded-2xl border border-transparent hover:bg-white hover:text-transparent hover:border-[#14ADD6] hover:bg-clip-text hover:text-gradient-to-r hover:from-[#14ADD6] hover:to-[#384295] transition-all duration-300 ease-in-out">
                Entrar
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
